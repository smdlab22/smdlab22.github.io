# SMD Lab 홈페이지

인하대학교 SMD 연구실 홈페이지입니다. 순수 HTML/CSS/JS로 만들어져 있어 **비용 없이** GitHub Pages에 올릴 수 있고, 별도 프로그램 설치 없이 **텍스트 파일 수정만으로 내용을 바꿀 수 있어요.**

## 폴더 구조

이제 한 페이지가 아니라 **6개의 페이지**로 나뉘어 있습니다. 로고를 클릭하면 항상 Home(`index.html`)으로 돌아가요.

```
smdlab-site/
├── index.html            ← Home (애니메이션 첫 화면 + 바로가기 카드)
├── research.html          ← 연구소개
├── team.html               ← 구성원
├── publications.html       ← 논문
├── news.html                ← 소식
├── contact.html             ← 연락처
├── css/style.css            ← 디자인 (모든 페이지 공통)
├── js/data.js                ← ★ 내용 수정은 여기서! (구성원, 논문, 소식 등)
├── js/common.js               ← 언어 전환·상단메뉴·하단푸터 (공통, 거의 건드릴 일 없음)
├── js/page-home.js             ← Home 애니메이션 (거의 건드릴 일 없음)
├── js/page-research.js         ← Research 페이지 렌더링
├── js/page-team.js             ← Team 페이지 렌더링
├── js/page-publications.js     ← Publications 페이지 렌더링
├── js/page-news.js             ← News 페이지 렌더링
├── js/page-contact.js          ← Contact 페이지 렌더링
├── images/                     ← 구성원 사진, 로고 등을 넣는 폴더
└── README.md
```

사이트는 기본적으로 **영어**로 열리고, 상단 오른쪽 버튼을 누르면 한국어로 전환됩니다. 선택한 언어는 브라우저에 저장되어 다른 페이지로 이동해도 유지됩니다.

## 1. 우선 내 컴퓨터에서 미리보기

`index.html` 파일을 더블클릭해서 브라우저로 열면 바로 확인할 수 있어요. (인터넷 연결이 있어야 폰트가 예쁘게 나옵니다)

## 2. 무료로 인터넷에 올리기 (GitHub Pages)

1. [github.com](https://github.com) 에서 무료 계정을 만듭니다. (이미 있다면 생략)
2. 새 저장소(Repository)를 만듭니다. 이름은 자유롭게 정하세요. (예: `smd-lab-site`) — **Public**으로 설정해야 무료 Pages 기능을 쓸 수 있어요.
3. 이 폴더 안의 파일 전체(`index.html`, `research.html`, `team.html`, `publications.html`, `news.html`, `contact.html`, `css/`, `js/`, `images/`)를 그 저장소에 업로드합니다.
   - GitHub 웹사이트에서 "Add file → Upload files"로 드래그 앤 드롭 해도 되고,
   - Git에 익숙하다면 `git add`, `git commit`, `git push`로 올려도 됩니다.
4. 저장소 페이지에서 **Settings → Pages** 로 들어갑니다.
5. "Branch" 항목에서 `main` (또는 `master`) 브랜치, 폴더는 `/ (root)` 를 선택하고 저장합니다.
6. 1~2분 기다리면 `https://내계정.github.io/저장소이름/` 주소로 사이트가 공개됩니다.
7. (선택) 학교에서 별도 도메인(예: smdlab.inha.ac.kr)을 지원해준다면, 같은 Pages 설정 화면의 "Custom domain"에 입력해서 연결할 수 있어요. 이 경우도 GitHub Pages 자체는 계속 무료입니다.

## 3. 내용 업데이트하는 방법 (가장 자주 하게 될 일)

내용은 전부 **`js/data.js`** 한 파일에 모여 있어요. 이 파일을 열어서:

- **새 학생 추가**: `team` 배열에 있는 항목 하나를 복사해서 붙여넣고 이름/역할/소속 등을 바꾸세요.
- **졸업생 제거**: 해당 학생의 `{ ... }` 블록 전체를 지우세요.
- **새 논문 추가**: `publications.international` 배열 맨 위에 새 항목을 추가하세요. (번호는 자동으로 매겨집니다)
- **새 소식 추가**: `news` 배열 맨 위에 새 항목을 추가하세요.
- **연구 소개 문구 수정**: `research.topics` 안의 `titleKr`, `bodyKr` 등을 원하는 문구로 바꾸세요.

수정 후 저장하고, GitHub 저장소에 다시 업로드(또는 `git push`)하면 실제 사이트에 반영됩니다.

> 💡 **가장 쉬운 방법**: `js/data.js` 파일을 통째로 복사해서 클로드(Claude)에게 "이 학생을 팀에 추가해줘" 또는 "이 논문을 publications에 추가해줘"라고 요청하면, 수정된 파일을 다시 만들어드릴 수 있어요.

## 4. 사진 넣기

`images/` 폴더에 사진 파일(jpg, png)을 넣고, `js/data.js`의 `photo:` 값에 파일 경로를 적어주면 프로필 사진이 나옵니다. (지금은 사진이 없어도 이니셜이 자동으로 표시되도록 되어 있어요)

## 5. 한국어/영어 전환

오른쪽 위 "EN" / "KR" 버튼으로 언어를 바꿀 수 있어요. 새 항목을 추가할 때 `Kr` / `En` 두 버전을 모두 채워주면 언어 전환 시에도 내용이 비지 않습니다.

## 6. 논문에 대표 이미지 넣기

`js/data.js` 의 각 논문 항목에 `image: "images/파일명.jpg"` 를 추가하면 목록에 작은 대표 이미지(썸네일)가 함께 표시됩니다. 넣지 않으면 자동으로 기본 아이콘이 보여요. 이미지 파일은 `images/` 폴더에 넣어주세요.

```js
{ year: "2026", image: "images/pub-2026.jpg", text: "..." },
```

