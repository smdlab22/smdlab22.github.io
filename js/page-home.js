/* page-home.js — Home 페이지 전용 렌더링 */

function initHeroCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w, h, points, raf;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width = rect.width * dpr;
    h = canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
  }

  function makePoints() {
    const count = Math.max(28, Math.round((w * h) / (42000 * dpr * dpr)));
    points = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18 * dpr,
      vy: (Math.random() - 0.5) * 0.18 * dpr,
      signal: i % 6 === 0,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function frame(time) {
    ctx.clearRect(0, 0, w, h);
    const maxDist = 150 * dpr;

    points.forEach((p) => {
      if (!reduceMotion) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
    });

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.strokeStyle = `rgba(62,124,116,${(1 - dist / maxDist) * 0.45})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }

    points.forEach((p) => {
      const pulse = p.signal && !reduceMotion ? 0.6 + 0.4 * Math.sin(time / 700 + p.phase) : 1;
      ctx.fillStyle = p.signal ? `rgba(227,154,59,${pulse})` : "rgba(241,243,238,0.55)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, (p.signal ? 3 : 1.6) * dpr, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!reduceMotion) raf = requestAnimationFrame(frame);
  }

  resize();
  makePoints();
  frame(0);

  if (reduceMotion) return; // 정적인 한 프레임만 그리고 종료

  window.addEventListener("resize", () => {
    cancelAnimationFrame(raf);
    resize();
    makePoints();
    frame(0);
  });
}

function renderPage() {
  // Explore 섹션이 삭제되어 현재는 특별히 렌더링할 내용이 없습니다.
}

document.addEventListener("DOMContentLoaded", initHeroCanvas);
