const pages = {
  home: `
    <section class="main-visual">
      <h2>환영합니다!</h2>
      <p class="main-desc">Unity로 인디 게임을 개발, 출시, 마케팅하는 모든 과정을 한 곳에서!</p>
    </section>
    <section class="features">
      <h2>주요 기능</h2>
      <ul class="feature-list">
        <li>
          <strong>개발 가이드</strong>
          <span>아이디어 기획부터 Unity 프로그래밍, 에셋 활용까지 단계별 안내</span>
        </li>
        <li>
          <strong>엔진 학습</strong>
          <span>Unity 설치, 2D 게임 예제, 실전 완성까지 따라하기</span>
        </li>
        <li>
          <strong>마케팅/출시</strong>
          <span>트레일러 제작, SNS 홍보, Steam 등록, 수익화 전략</span>
        </li>
        <li>
          <strong>즐겨찾기</strong>
          <span>중요한 정보를 한 번에 모아보기</span>
        </li>
        <li>
          <strong>검색</strong>
          <span>태그/키워드로 원하는 정보 빠르게 찾기</span>
        </li>
      </ul>
    </section>
    <section class="contact">
      <h2>문의</h2>
      <p>사이트 개선 제안이나 문의는 <a href="mailto:silhun874@gmail.com">silhun874@gmail.com</a> 으로 보내주세요.</p>
    </section>
  `,
  about: `
    <section>
      <h2>인디 게임</h2>
      <p>
        <b>인디 게임</b>은 대형 게임사와 달리 소규모 팀이나 개인이 독립적으로 개발하는 게임을 의미합니다.<br>
        상업적 성공보다는 창의성, 실험성, 개발자의 개성이 강조되는 경우가 많으며, 제한된 예산과 인력으로도 독특한 게임 경험을 제공합니다.<br>
        대표적인 인디 게임으로는 <b>Undertale</b>, <b>Hollow Knight</b>, <b>Stardew Valley</b>, <b>Dead Cells</b> 등이 있습니다.<br>
        최근에는 Unity, Unreal Engine 등 접근성 높은 게임 엔진과 다양한 배포 플랫폼(Steam, itch.io 등)의 등장으로 인디 게임 개발이 더욱 활발해졌습니다.<br>
        <br>
        <b>인디 게임의 특징</b>
        <ul>
          <li>소규모 팀 또는 1인 개발</li>
          <li>창의적이고 실험적인 게임플레이</li>
          <li>개발자의 개성이 드러나는 스토리와 그래픽</li>
          <li>커뮤니티와의 적극적인 소통</li>
          <li>Steam, itch.io 등 다양한 플랫폼에서 배포</li>
        </ul>
      </p>
      <button class="favorite" data-title="인디 게임이란?">★ 즐겨찾기</button>
    </section>
  `,
  guide: `
    <section>
      <h2>개발 가이드</h2>
      <ul>
        <li>
          <b>기획</b>:<br>
          - 게임 아이디어 발상법, 트렌드 분석<br>
          - GDD(Game Design Document) 작성법<br>
          - 타깃 유저, 플랫폼, 장르 선정<br>
          - 스토리/세계관/캐릭터 기획<br>
          <button class="favorite" data-title="기획">★</button>
        </li>
        <li>
          <b>그래픽/사운드</b>:<br>
          - 무료/유료 에셋 사이트(예: OpenGameArt, Unity Asset Store, Pixabay 등) 소개<br>
          - 2D/3D 그래픽 제작 팁, 툴 추천(예: Aseprite, Blender, Krita 등)<br>
          - 사운드/음악 소스 구하는 방법, 저작권 주의사항<br>
          <button class="favorite" data-title="그래픽/사운드">★</button>
        </li>
        <li>
          <b>프로그래밍</b>:<br>
          - Unity 엔진 기본 구조 및 C# 스크립트 작성법<br>
          - 씬 관리, 오브젝트 이동/충돌, UI 구현 등 핵심 예제<br>
          - 코드 관리(Git), 협업 팁<br>
          <button class="favorite" data-title="프로그래밍">★</button>
        </li>
        <li>
          <b>에셋 추천</b>:<br>
          - 인기 무료/유료 에셋 소개 및 활용법<br>
          - 에셋 통합/최적화 방법<br>
          <button class="favorite" data-title="에셋 추천">★</button>
        </li>
      </ul>
    </section>
  `,
  engine: `
    <section>
      <h2>엔진 학습 - Unity</h2>
      <ul>
        <li><a href="#" class="engine-detail" data-detail="설치 및 환경 세팅">설치 및 환경 세팅</a></li>
        <li><a href="#" class="engine-detail" data-detail="2D 게임 예제">2D 게임 예제</a></li>
        <li><a href="#" class="engine-detail" data-detail="간단한 2D 게임 완성">간단한 2D 게임 완성</a></li>
      </ul>
    </section>
  `,
  marketing: `
    <section>
      <h2>마케팅/출시</h2>
      <ul>
        <li>SNS 마케팅: 트레일러, 트위터/인스타그램 <button class="favorite" data-title="SNS 마케팅">★</button></li>
        <li>플랫폼 배포: Steam 등록 가이드 <button class="favorite" data-title="플랫폼 배포">★</button></li>
        <li>수익화: 광고, 번들 <button class="favorite" data-title="수익화">★</button></li>
      </ul>
    </section>
  `,
  favorites: `
    <section>
      <h2>즐겨찾기</h2>
      <div id="favoriteList"></div>
    </section>
  `
};

const searchData = [
  { title: "개발 가이드", tags: ["개발", "가이드", "기획", "프로그래밍", "에셋", "그래픽", "사운드"], page: "guide" },
  { title: "엔진 학습", tags: ["엔진", "유니티", "Unity", "설치", "2D", "예제"], page: "engine" },
  { title: "마케팅/출시", tags: ["마케팅", "출시", "SNS", "트레일러", "홍보", "Steam", "수익화"], page: "marketing" },
  { title: "인디 게임이란?", tags: ["인디", "소개", "정의"], page: "about" },
  { title: "즐겨찾기", tags: ["즐겨찾기", "favorite"], page: "favorites" }
];

const guideDetails = {
  "인디 게임": `
    <section>
      <h2>인디 게임이란?</h2>
      <p>
        인디 게임은 대형 게임사와 달리 소규모 팀이나 개인이 독립적으로 개발하는 게임을 의미합니다.<br>
        <b>특징</b>
        <ul>
          <li>소규모 팀 또는 1인 개발이 많아 개발자의 개성이 게임에 잘 드러납니다.</li>
          <li>상업적 성공보다 창의성, 실험성, 새로운 시도를 중시합니다.</li>
          <li>Unity, Unreal 등 무료/저렴한 엔진과 Steam, itch.io 같은 플랫폼 덕분에 누구나 도전할 수 있습니다.</li>
          <li>커뮤니티와의 소통, 피드백 반영이 활발합니다.</li>
        </ul>
        <b>대표 인디 게임</b>
        <ul>
          <li>Undertale: 1인 개발, 독특한 스토리와 전투 시스템</li>
          <li>Hollow Knight: 소규모 팀, 깊이 있는 액션과 세계관</li>
          <li>Stardew Valley: 1인 개발, 농장 경영과 마을 생활</li>
          <li>Dead Cells: 로그라이크 액션, 빠른 성장과 반복 플레이</li>
        </ul>
        <b>인디 게임 개발의 장점</b>
        <ul>
          <li>자유로운 아이디어 실현</li>
          <li>작은 규모로 빠른 개발과 반복</li>
          <li>개발자와 유저 간의 직접 소통</li>
        </ul>
        <b>인디 게임 개발의 어려움</b>
        <ul>
          <li>예산과 인력의 한계</li>
          <li>마케팅, 홍보, 출시까지 모두 직접 해야 함</li>
          <li>완성까지의 동기 부여와 꾸준함 필요</li>
        </ul>
      </p>
      <button class="favorite" data-title="인디 게임이란?">★ 즐겨찾기</button>
    </section>
  `,
  "기획": `
    <section>
      <h2>기획</h2>
      <ul>
        <li><b>아이디어 발상</b>: 좋아하는 게임, 일상 경험, 영화/책 등에서 영감을 얻어보세요. "내가 해보고 싶은 게임"을 생각해보는 것도 좋습니다.</li>
        <li><b>트렌드 분석</b>: Steam, itch.io, 모바일 스토어에서 인기 장르와 최근 트렌드를 살펴보세요.</li>
        <li><b>GDD(Game Design Document) 작성</b>: 게임의 목표, 규칙, 시스템, 그래픽/사운드 스타일, 개발 일정 등을 문서로 정리하면 개발 중 흔들리지 않습니다.</li>
        <li><b>타깃 유저/플랫폼/장르 선정</b>: 어떤 유저를 위한 게임인지, PC/모바일/콘솔 중 어디에 출시할지, 액션/퍼즐/시뮬레이션 등 장르를 정하세요.</li>
        <li><b>스토리/세계관/캐릭터 기획</b>: 간단한 배경 이야기, 주요 캐릭터의 성격과 목표, 게임의 분위기를 정해보세요.</li>
      </ul>
      <button class="favorite" data-title="기획">★ 즐겨찾기</button>
    </section>
  `,
  "그래픽/사운드": `
    <section>
      <h2>그래픽/사운드</h2>
      <ul>
        <li><b>에셋 구하기</b>: OpenGameArt, Unity Asset Store, Pixabay 등에서 무료/유료 그래픽과 사운드를 구할 수 있습니다.</li>
        <li><b>그래픽 제작 팁</b>: Aseprite(2D 픽셀), Blender(3D), Krita(일러스트) 등 툴을 활용해보세요. 처음엔 심플한 스타일로 시작해도 충분합니다.</li>
        <li><b>사운드/음악</b>: BGM, 효과음은 freesound.org, opengameart.org 등에서 구하거나, 간단한 DAW(예: LMMS)로 직접 만들어볼 수 있습니다.</li>
        <li><b>저작권 주의</b>: 무료 에셋도 라이선스를 꼭 확인하고, 상업적 이용 가능 여부를 체크하세요.</li>
      </ul>
      <button class="favorite" data-title="그래픽/사운드">★ 즐겨찾기</button>
    </section>
  `,
  "프로그래밍": `
    <section>
      <h2>프로그래밍</h2>
      <ul>
        <li><b>Unity 엔진 구조</b>: 씬(Scene), 게임 오브젝트, 컴포넌트, 스크립트(C#)의 개념을 익히세요.</li>
        <li><b>기본 예제</b>: 오브젝트 이동, 충돌 처리, UI 버튼 만들기 등 간단한 예제부터 시작하세요.</li>
        <li><b>코드 관리</b>: Git을 사용해 소스코드를 백업하고, 버전 관리를 연습하세요.</li>
        <li><b>협업 팁</b>: 팀 프로젝트라면 GitHub, Notion, Discord 등 협업 툴을 활용하세요.</li>
        <li><b>참고 자료</b>: Unity 공식 튜토리얼, 유튜브 강좌, 네이버 카페(유니티 개발자 모임) 등에서 도움을 받을 수 있습니다.</li>
      </ul>
      <button class="favorite" data-title="프로그래밍">★ 즐겨찾기</button>
    </section>
  `,
  "에셋 추천": `
    <section>
      <h2>에셋 추천</h2>
      <ul>
        <li><b>무료 에셋</b>: OpenGameArt, Kenney.nl, Unity Asset Store(무료 카테고리) 등에서 픽셀, 3D, UI, 사운드 등 다양한 에셋을 받을 수 있습니다.</li>
        <li><b>유료 에셋</b>: Unity Asset Store, itch.io 등에서 저렴하게 고퀄리티 에셋을 구매할 수 있습니다.</li>
        <li><b>에셋 활용 팁</b>: 여러 에셋을 조합할 때는 스타일 통일에 신경쓰고, 용량 최적화(불필요한 리소스 삭제, 압축 등)도 중요합니다.</li>
      </ul>
      <button class="favorite" data-title="에셋 추천">★ 즐겨찾기</button>
    </section>
  `,
  "엔진 학습": `
    <section>
      <h2>Unity 엔진 학습</h2>
      <ul>
        <li><a href="#" class="engine-detail" data-detail="설치 및 환경 세팅">설치 및 환경 세팅</a></li>
        <li><a href="#" class="engine-detail" data-detail="2D 게임 예제">2D 게임 예제</a></li>
        <li><a href="#" class="engine-detail" data-detail="간단한 2D 게임 완성">간단한 2D 게임 완성</a></li>
      </ul>
    </section>
  `,
  "설치 및 환경 세팅": `
    <section>
      <h2>설치 및 환경 세팅</h2>
      <ul>
        <li>Unity Hub 다운로드 및 설치</li>
        <li>Unity 버전 선택 및 설치</li>
        <li>Visual Studio(코드 편집기) 함께 설치</li>
        <li>새 프로젝트 생성(2D/3D 선택)</li>
        <li>기본 인터페이스(씬, 계층, 인스펙터, 프로젝트, 콘솔) 이해</li>
      </ul>
      <p>Unity 공식 사이트: <a href="https://unity.com/kr" target="_blank">https://unity.com/kr</a></p>
      <button class="favorite" data-title="설치 및 환경 세팅">★ 즐겨찾기</button>
    </section>
  `,
  "2D 게임 예제": `
    <section>
      <h2>2D 게임 예제</h2>
      <ul>
        <li>스프라이트(이미지) 추가 및 배치</li>
        <li>오브젝트 이동, 점프, 충돌 처리</li>
        <li>간단한 UI(버튼, 점수 표시) 만들기</li>
        <li>씬(Scene) 전환 및 관리</li>
        <li>스크립트(C#)로 캐릭터 제어</li>
      </ul>
      <button class="favorite" data-title="2D 게임 예제">★ 즐겨찾기</button>
    </section>
  `,
  "간단한 2D 게임 완성": `
    <section>
      <h2>간단한 2D 게임 완성</h2>
      <ul>
        <li>게임 규칙(목표, 승리/패배 조건) 설계</li>
        <li>적/아이템 추가 및 상호작용 구현</li>
        <li>사운드(BGM, 효과음) 적용</li>
        <li>게임 오버/클리어 UI, 점수 시스템</li>
        <li>빌드 및 실행 파일 만들기</li>
      </ul>
      <button class="favorite" data-title="간단한 2D 게임 완성">★ 즐겨찾기</button>
    </section>
  `,
  "마케팅/출시": `
    <section>
      <h2>마케팅/출시</h2>
      <ul>
        <li><b>SNS 마케팅</b>: 트레일러 영상, 스크린샷, 개발 일지를 트위터, 인스타그램, 유튜브 등에 꾸준히 올리세요. 해시태그(#indiedev, #gamedev 등) 활용이 중요합니다.</li>
        <li><b>플랫폼 배포</b>: Steam, itch.io, 구글플레이 등 원하는 플랫폼에 맞게 빌드하고, 등록 절차(심사, 설명 작성, 가격 책정 등)를 진행하세요.</li>
        <li><b>수익화</b>: 유료 판매, 광고, 번들(다른 게임과 묶음 판매), 크라우드펀딩(텀블벅, 킥스타터) 등 다양한 방법이 있습니다.</li>
      </ul>
      <button class="favorite" data-title="마케팅/출시">★ 즐겨찾기</button>
    </section>
  `,
  "SNS 마케팅": `
    <section>
      <h2>SNS 마케팅</h2>
      <ul>
        <li><b>트레일러/스크린샷 제작</b>: 짧고 임팩트 있는 영상, 게임의 핵심 재미를 보여주는 이미지를 준비하세요.</li>
        <li><b>플랫폼별 전략</b>: 트위터(짧은 소식, 해시태그), 인스타그램(이미지 중심), 유튜브(영상), 디스코드(커뮤니티) 등 각 플랫폼 특성에 맞게 홍보하세요.</li>
        <li><b>커뮤니티 소통</b>: 개발 과정을 공유하고, 유저 피드백을 적극적으로 반영하세요.</li>
      </ul>
      <button class="favorite" data-title="SNS 마케팅">★ 즐겨찾기</button>
    </section>
  `,
  "플랫폼 배포": `
    <section>
      <h2>플랫폼 배포</h2>
      <ul>
        <li><b>Steam 등록</b>: Steamworks 계정 생성 → 게임 정보 입력 → 빌드 업로드 → 심사 및 출시. 한글화, 가격 정책, 트레이딩 카드 등도 준비하세요.</li>
        <li><b>itch.io 등록</b>: 간단한 정보 입력만으로 무료/유료 배포가 가능합니다. 개발 중 데모 공개도 추천합니다.</li>
        <li><b>모바일 출시</b>: 구글플레이, 앱스토어 등록 절차와 심사 기준을 확인하세요.</li>
      </ul>
      <button class="favorite" data-title="플랫폼 배포">★ 즐겨찾기</button>
    </section>
  `,
  "수익화": `
    <section>
      <h2>수익화</h2>
      <ul>
        <li><b>유료 판매</b>: 게임 자체를 유료로 판매하거나, DLC(추가 콘텐츠)로 수익을 올릴 수 있습니다.</li>
        <li><b>광고</b>: 모바일 게임의 경우 광고 삽입(배너, 전면광고 등)으로 수익을 얻을 수 있습니다.</li>
        <li><b>번들/크라우드펀딩</b>: 다른 게임과 묶어 판매하거나, 텀블벅/킥스타터 등에서 후원을 받을 수 있습니다.</li>
      </ul>
      <button class="favorite" data-title="수익화">★ 즐겨찾기</button>
    </section>
  `,
  "즐겨찾기": `
    <section>
      <h2>즐겨찾기</h2>
      <div id="favoriteList"></div>
    </section>
  `
};

function setDetailMenuEvents() {
  // 모든 드롭다운 상세 메뉴(인디 게임, 개발 가이드, 엔진 학습, 마케팅/출시)
  document.querySelectorAll('.dropdown-menu a[data-detail]').forEach(link => {
    link.onclick = function(e) {
      e.preventDefault();
      const key = link.getAttribute('data-detail');
      if (guideDetails[key]) {
        document.getElementById('content').innerHTML = guideDetails[key];
        setFavoriteButtonStates();
        setFavoriteButtonEvents();
        setDetailMenuEvents();
      }
    };
  });
  // 엔진 학습 내부 세부 링크
  document.querySelectorAll('.engine-detail').forEach(link => {
    link.onclick = function(e) {
      e.preventDefault();
      const key = link.getAttribute('data-detail');
      if (guideDetails[key]) {
        document.getElementById('content').innerHTML = guideDetails[key];
        setFavoriteButtonStates();
        setFavoriteButtonEvents();
        setDetailMenuEvents();
      }
    };
  });
  // 즐겨찾기 등 일반 메뉴
  document.querySelectorAll('nav a[data-page]').forEach(link => {
    link.onclick = function(e) {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (guideDetails[page]) {
        document.getElementById('content').innerHTML = guideDetails[page];
        setFavoriteButtonStates();
        setFavoriteButtonEvents();
        setDetailMenuEvents();
      } else {
        render(page);
      }
    };
  });
}

// 페이지 동적 변경 시에도 이벤트 재설정 필요
function render(page) {
  document.getElementById('content').innerHTML = pages[page] || pages.home;
  if (page === 'favorites') renderFavorites();
  setFavoriteButtonStates();
  setFavoriteButtonEvents();
  setDetailMenuEvents();
}

// 네비게이션 클릭 이벤트
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.getAttribute('data-page');
    render(page);
  });
});

// 제목 클릭 시 홈으로 이동
document.getElementById('main-title').addEventListener('click', function() {
  render('home');
});

// 검색 폼 이벤트
document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = document.getElementById('searchInput').value.trim();
  renderSearchResults(query);
});

function renderSearchResults(query) {
  const main = document.getElementById('content');
  if (!query) {
    main.innerHTML = `<section><h2>검색 결과</h2><p>검색어를 입력하세요.</p></section>`;
    return;
  }
  const results = searchData.filter(item =>
    item.tags.some(tag => tag.includes(query)) || item.title.includes(query)
  );
  if (results.length === 0) {
    main.innerHTML = `<section><h2>검색 결과</h2><p>관련 결과가 없습니다.</p></section>`;
    return;
  }
  main.innerHTML = `
    <section>
      <h2>검색 결과</h2>
      <ul>
        ${results.map(item => `<li><b>${query}</b> → <a href="#" data-page="${item.page}" class="search-link">${item.title}</a></li>`).join('')}
      </ul>
    </section>
  `;
  document.querySelectorAll('.search-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      render(link.getAttribute('data-page'));
    });
  });
}

// 즐겨찾기 추가/제거
function toggleFavorite(title) {
  let favs = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (favs.includes(title)) {
    favs = favs.filter(t => t !== title);
  } else {
    favs.push(title);
  }
  localStorage.setItem('favorites', JSON.stringify(favs));
  setFavoriteButtonStates();
  if (document.getElementById('favoriteList')) renderFavorites();
}

// 버튼 상태(색상 등) 업데이트
function setFavoriteButtonStates() {
  let favs = JSON.parse(localStorage.getItem('favorites') || '[]');
  document.querySelectorAll('button.favorite').forEach(btn => {
    const title = btn.getAttribute('data-title');
    if (favs.includes(title)) {
      btn.style.background = '#ff8c00';
      btn.style.color = '#fff';
      btn.textContent = '★ 즐겨찾기 취소';
    } else {
      btn.style.background = '#ffd700';
      btn.style.color = '#181a1b';
      btn.textContent = '★ 즐겨찾기';
    }
  });
}

// 버튼 이벤트 바인딩
function setFavoriteButtonEvents() {
  document.querySelectorAll('button.favorite').forEach(btn => {
    btn.onclick = function() {
      toggleFavorite(btn.getAttribute('data-title'));
    };
  });
}

function renderFavorites() {
  let favs = JSON.parse(localStorage.getItem('favorites') || '[]');
  const container = document.getElementById('favoriteList');
  if (!container) return;
  if (favs.length === 0) {
    container.innerHTML = '<p>즐겨찾기가 없습니다.</p>';
    return;
  }
  container.innerHTML = favs.map(title =>
    `<div style="margin-bottom:8px;display:flex;align-items:center;gap:8px;">
      <span>${title}</span>
      <button class="favorite" data-title="${title}">★ 즐겨찾기 취소</button>
    </div>`
  ).join('');
  setFavoriteButtonStates();
  setFavoriteButtonEvents();
}

// 드롭다운(개발 가이드 세부) 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.dropdown-menu a[data-guide]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const key = link.getAttribute('data-guide');
      document.getElementById('content').innerHTML = guideDetails[key];
      setFavoriteButtonStates();
      setFavoriteButtonEvents();
    });
  });
  setDetailMenuEvents();
});

// 초기 렌더
render('home');