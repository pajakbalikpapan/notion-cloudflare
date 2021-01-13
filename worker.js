const MY_DOMAIN = 'pajakbalikpapan.online';

const SLUG_TO_PAGE = {
    '': 'ee968cd9dccb43f78e6ccebc67cc1477',
    'pricing': '555e945cf21a497387ec0e328790d3b2',
    'jasa-pendaftaran-npwp': '1d620afcc4c949bcbb2bb118aae0d024',
    'jasa-pencabutan-pkp': 'bc616a281606452d879534d7c4add155',
    'penghapusan-sanksi-pajak': '008605a4528e49c6a02d5ca322271ee4',
    'Jasa-buka-blokir-KSWP-SKF-dan-OSS': 'a635e60f26eb45a2a9f8a1a9eef9ae8c',
    'Jasa-penonaktifan-NPWP': 'bb0a0f06081f4a4fb257aae4279770d1',
};

const PAGE_TITLE = 'Pajak Balikpapan';
const PAGE_DESCRIPTION = 'Jasa perpajakan, administrasi, SPT Tahunan, SPT Masa, pajak dan akuntansi';
const FAVICON_URL = 'https://imgur.com/X0pd8JS';
const IOS_ICON_URL = 'https://imgur.com/X0pd8JS';

const OG_URL = 'https://pajakbalikpapan.online';
const OG_TYPE = 'website';
const OG_IMAGE_URL = 'https://imgur.com/X0pd8JS';

const META_TWITTER_CARD = 'summary';
const META_TWITTER_SITE = '@BalikpapanTax';
const META_TWITTER_TITLE = PAGE_TITLE;
const META_TWITTER_DESC = PAGE_DESCRIPTION;
const META_TWITTER_IMAGE = 'https://imgur.com/X0pd8JS';
const META_TWITTER_URL = 'https://pajakbalikpapan.online';

const GOOGLE_FONT = 'Poppins';

 /* Step 5: enter any custom scripts you'd like */
const CUSTOM_SCRIPT = `<meta name="google-site-verification" content="iNI4E--xySw3OEWBJgT2VhukgawCIgXu4cmBEwrFV5c" /><script async src="https://www.googletagmanager.com/gtag/js?id=UA-176078354-1"></script>
<script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-176078354-1');</script><meta name="google-site-verification" content="iNI4E--xySw3OEWBJgT2VhukgawCIgXu4cmBEwrFV5c" />`;

const CUSTOM_CSS = `/* kasus perpajakan */[data-block-id="bc8ddb08-f2b4-4112-a7a8-042996ac3cd7"] > div:first-child > div{min-height: 0 !important;}[data-block-id="bc8ddb08-f2b4-4112-a7a8-042996ac3cd7"] > div:first-child > div{display: none !important;}[data-block-id="7338635d-dfbc-4197-8f60-f4a917b2b3f2"]{text-align: center;}[data-block-id=cb98b336-c54d-4741-9752-244830a2fe6b]{text-align:center;margin-bottom:-3.5rem!important}.notion-frame{background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)!important;background-size: 130% 100% !important;animation: gradient 8s ease infinite;}@keyframes gradient{0%{background-position:0 50%!important}50%{background-position:100% 50%}100%{background-position:0 50%}}.notion-page-content{padding-bottom:2.5rem!important;padding-top:2.5rem!important;background:#fff;border-radius:1rem;margin:-2.75rem 0 10vh 0}.notion-page-block{position:relative}.notion-scroller>[style="width: 100%; font-size: 14px;"]{margin-bottom:1.5rem}.notion-image-block{pointer-events:none!important}.notion-image-block img{pointer-events:none!important}.notion-callout-block>div>div{border-radius:.5rem!important}.notion-peek-renderer{background:#142025!important;transition:.3s}.notion-peek-renderer>div:nth-child(2){border-radius:.5rem!important;overflow:hidden}.notion-gallery-view>div>div>a{border-radius:.5rem!important}.notion-gallery-view>div>div>a:hover{opacity:.75}[data-block-id=c7ef4bd9-4069-480b-a481-3533903733e8]>div>div:nth-child(even),[data-block-id=f34cdbc9-8cd0-42aa-8189-3aa368fd0f37]>div>div:nth-child(even){display:none!important}@media only screen and (min-width:50em){[data-block-id=c7ef4bd9-4069-480b-a481-3533903733e8]>div>div:nth-child(even),[data-block-id=f34cdbc9-8cd0-42aa-8189-3aa368fd0f37]>div>div:nth-child(even){display:block!important}}[data-block-id=c7ef4bd9-4069-480b-a481-3533903733e8]>div>div:nth-child(odd),[data-block-id=f34cdbc9-8cd0-42aa-8189-3aa368fd0f37]>div>div:nth-child(odd){display:inline-block!important;max-width:50%!important}@media only screen and (min-width:50em){[data-block-id=c7ef4bd9-4069-480b-a481-3533903733e8]>div>div:nth-child(odd),[data-block-id=f34cdbc9-8cd0-42aa-8189-3aa368fd0f37]>div>div:nth-child(odd){display:block!important}}[data-block-id="971194ae-0c81-4fc6-a386-382167111c79"]{display:none}@media only screen and (min-width:50em){[data-block-id="971194ae-0c81-4fc6-a386-382167111c79"]{display:block;text-align:right;margin-top:-5.825rem!important;font-size:4rem}}[data-block-id=fcce5ac2-0901-4e52-a247-4684ece3df01]{font-size:.875rem;text-align:center}[data-block-id=fcce5ac2-0901-4e52-a247-4684ece3df01] .notion-record-icon{display:none!important}[data-block-id="6aa56b96-f6bf-4590-82c4-adca0c85b920"]{text-align:center}[data-block-id="6f58376d-b7c3-47a6-8720-d537db62ebf0"]{text-align:center;margin-bottom:-3.5rem!important}[data-block-id="6d7f9450-7f4e-4b6e-a9b8-45bccd9bfdd5"]{text-align:center;font-size:.875rem}[data-block-id="75a3b99e-f428-430d-a87b-3d5242fe5cce"]{text-align:right;padding-top:1rem}[data-block-id="51ee9852-027b-450e-aa4e-f6f0a1861ec2"]>div:first-child,[data-block-id=ec104b15-ff6e-4400-a848-a88f6139e1ff]>div:first-child,[data-block-id=f70889a1-feaa-4a1d-b00c-d4ee6e29689d]>div:first-child{min-height:0!important}[data-block-id="51ee9852-027b-450e-aa4e-f6f0a1861ec2"]>div:first-child>div,[data-block-id=ec104b15-ff6e-4400-a848-a88f6139e1ff]>div:first-child>div,[data-block-id=f70889a1-feaa-4a1d-b00c-d4ee6e29689d]>div:first-child>div{display:none!important}[data-block-id="183d187c-7b2c-4ce4-9d56-13d715eb2e9b"],[data-block-id="566014b3-8ba6-448f-b305-717f947ca58a"],[data-block-id="99a71a4b-08f7-4c99-945a-ddfbc9df0a1b"],[data-block-id=a1dd0805-87b2-444e-8a6b-90ce0086a1c3],[data-block-id=afad12b7-f88f-419c-9a7f-7e621018b287],[data-block-id=e8e72e41-d5b4-4987-a016-44f8f489b53f],[data-block-id=ff122c47-f4fe-4b7f-b827-703883217388]{display:none!important}[data-block-id="00b8412b-49d8-4a22-a739-a4f666fbd082"]~div img{border-radius:.5rem!important}[data-block-id=e0fa74a3-dfc2-4b66-bcd9-30abfced1863]~div img{border-radius:.5rem!important}[data-block-id="039a5f84-338a-4b2d-bed7-cd2112784fe2"],[data-block-id="43e70b54-3b70-4735-814e-776b5f5dc4fb"],[data-block-id="8371d4f9-4924-4e07-a422-2b871e2d504b"],[data-block-id=a9066f17-df96-43ab-a81a-ccba76c34176],[data-block-id=e11ff443-eddf-42cc-a197-6580c47d1bc5],[data-block-id=f23de68b-e100-4ff2-a4e0-1a3b19eb98d9]{display:none}@media only screen and (min-width:50em){[data-block-id="54db5892-e2da-460e-8dc9-caa48615b902"],[data-block-id="5fc61763-35d2-4ae7-ab98-086e63758bfb"],[data-block-id="69a89fae-e10d-4f22-806c-e37ab3397f7e"],[data-block-id="71a0c46d-f859-4f2c-80e2-b1e6972f5f0e"],[data-block-id=b506d1bf-8ad7-4bb8-81d2-87e43bf21756],[data-block-id=c0b083f9-d63d-4f45-bee7-8b08d5e7e0f6]{display:none}[data-block-id="039a5f84-338a-4b2d-bed7-cd2112784fe2"],[data-block-id="43e70b54-3b70-4735-814e-776b5f5dc4fb"],[data-block-id="8371d4f9-4924-4e07-a422-2b871e2d504b"],[data-block-id=a9066f17-df96-43ab-a81a-ccba76c34176],[data-block-id=e11ff443-eddf-42cc-a197-6580c47d1bc5],[data-block-id=f23de68b-e100-4ff2-a4e0-1a3b19eb98d9]{display:block}}[data-block-id="8a0b343f-5acc-4095-9fce-266148517eda"]{display:none!important}`;

const PAGE_TO_SLUG = {};
const slugs = [];
const pages = [];
Object.keys(SLUG_TO_PAGE).forEach(slug => {
  const page = SLUG_TO_PAGE[slug];
  slugs.push(slug);
  pages.push(page);
  PAGE_TO_SLUG[page] = slug;
});

addEventListener('fetch', event => {
  event.respondWith(fetchAndApply(event.request));
});

function generateSitemap() {
  let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  slugs.forEach(
    (slug) =>
      (sitemap +=
        '<url><loc>https://' + MY_DOMAIN + '/' + slug + '</loc></url>')
  );
  sitemap += '</urlset>';
  return sitemap;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function handleOptions(request) {
  if (request.headers.get('Origin') !== null &&
    request.headers.get('Access-Control-Request-Method') !== null &&
    request.headers.get('Access-Control-Request-Headers') !== null) {
    // Handle CORS pre-flight request.
    return new Response(null, {
      headers: corsHeaders
    });
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        'Allow': 'GET, HEAD, POST, PUT, OPTIONS',
      }
    });
  }
}

async function fetchAndApply(request) {
  if (request.method === 'OPTIONS') {
    return handleOptions(request);
  }
  let url = new URL(request.url);
  if (url.pathname === '/robots.txt') {
    return new Response('Sitemap: https://' + MY_DOMAIN + '/sitemap.xml');
  }
  if (url.pathname === '/sitemap.xml') {
    let response = new Response(generateSitemap());
    response.headers.set('content-type', 'application/xml');
    return response;
  }
  let fullPathname = request.url.replace("https://" + MY_DOMAIN, "");
  const notionUrl = 'https://www.notion.so' + fullPathname;
  let response;
  if (url.pathname.startsWith('/app') && url.pathname.endsWith('js')) {
    response = await fetch(notionUrl);
    let body = await response.text();
    response = new Response(body.replace(/www.notion.so/g, MY_DOMAIN).replace(/notion.so/g, MY_DOMAIN), response);
    response.headers.set('Content-Type', 'application/x-javascript');
  } else if ((url.pathname.startsWith('/api'))) {
    // Forward API
    response = await fetch(notionUrl, {
      body: request.body,
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
      },
      method: 'POST',
    });
    response = new Response(response.body, response);
    response.headers.set('Access-Control-Allow-Origin', '*');
  } else if (slugs.indexOf(url.pathname.slice(1)) > -1) {
    const pageId = SLUG_TO_PAGE[url.pathname.slice(1)];
    return Response.redirect('https://' + MY_DOMAIN + '/' + pageId, 301);
  } else if (pages.indexOf(url.pathname.slice(1)) === -1 && url.pathname.slice(1).match(/[0-9a-f]{32}/)) {
    return Response.redirect('https://' + MY_DOMAIN + '/' + ERROR_PAGE);
  } else {
    response = await fetch(notionUrl, {
      body: request.body,
      headers: request.headers,
      method: request.method,
    });
    response = new Response(response.body, response);
    response.headers.delete('Content-Security-Policy');
    response.headers.delete('X-Content-Security-Policy');
  }

  return appendJavascript(response, SLUG_TO_PAGE);
}

class MetaRewriter {
  element(element) {
    if (PAGE_TITLE !== '') {
      if (element.getAttribute('property') === 'og:title'
        || element.getAttribute('property') === 'og:site_name'
        || element.getAttribute('name') === 'twitter:title') {
        element.setAttribute('content', PAGE_TITLE);
      }
      if (element.tagName === 'title') {
        element.setInnerContent(PAGE_TITLE);
      }
    }
    if (PAGE_DESCRIPTION !== '') {
      if (element.getAttribute('name') === 'description'
        || element.getAttribute('property') === 'og:description'
        || element.getAttribute('name') === 'twitter:description') {
        element.setAttribute('content', PAGE_DESCRIPTION);
      }
    }
    if (element.getAttribute('property') === 'og:url') {
      element.setAttribute('content', OG_URL);
    }
    if (element.getAttribute('name') === 'apple-itunes-app') {
      element.remove();
    }
    if (element.getAttribute('property') === 'og:type') {
      element.setAttribute('content', OG_TYPE);
    }
    if (element.getAttribute('property') === 'og:image') {
      element.setAttribute('content', OG_IMAGE_URL);
    }
    if (element.tagName === 'link' && element.getAttribute('rel') === 'shortcut icon') {
      element.setAttribute('href', FAVICON_URL);
    }
    if (element.tagName === 'link' && element.getAttribute('rel') === 'apple-touch-icon') {
      element.setAttribute('href', IOS_ICON_URL);
    }
    if (element.getAttribute('name') === 'twitter:card') {
      element.setAttribute('content', META_TWITTER_CARD);
    }
    if (element.getAttribute('name') === 'twitter:site') {
      element.setAttribute('content', META_TWITTER_SITE);
    }
    if (element.getAttribute('name') === 'twitter:image') {
      element.setAttribute('content', META_TWITTER_IMAGE);
    }
    if (element.getAttribute('name') === 'twitter:url') {
      element.setAttribute('content', META_TWITTER_URL);
    }
  }
}

class HeadRewriter {
  element(element) {
    if (GOOGLE_FONT !== '') {
      element.append(`<link href="https://fonts.googleapis.com/css?family=${GOOGLE_FONT.replace(' ', '+')}:Regular,Bold,Italic&display=swap" rel="stylesheet">
      <style>* { font-family: "${GOOGLE_FONT}" !important; }</style>`, {
       html: true
      });
    }
    element.append(`<style>
    div.notion-topbar > div > div:nth-child(3) { display: none !important; }
    div.notion-topbar > div > div:nth-child(4) { display: none !important; }
    div.notion-topbar > div > div:nth-child(5) { display: none !important; }
    div.notion-topbar > div > div:nth-child(6) { display: none !important; }
    div.notion-topbar-mobile > div:nth-child(3) { display: none !important; }
    div.notion-topbar-mobile > div:nth-child(4) { display: none !important; }
    </style> ${CUSTOM_SCRIPT}<style>${CUSTOM_CSS}</style>`
    , {
      html: true
    })
  }
}

class BodyRewriter {
  constructor(SLUG_TO_PAGE) {
    this.SLUG_TO_PAGE = SLUG_TO_PAGE;
  }
  element(element) {
    element.append(`
    <script>
    const SLUG_TO_PAGE = ${JSON.stringify(this.SLUG_TO_PAGE)};
    const PAGE_TO_SLUG = {};
    const slugs = [];
    const pages = [];
    let redirected = false;
    Object.keys(SLUG_TO_PAGE).forEach(slug => {
      const page = SLUG_TO_PAGE[slug];
      slugs.push(slug);
      pages.push(page);
      PAGE_TO_SLUG[page] = slug;
    });
    function getPage() {
      return location.pathname.slice(-32);
    }
    function getSlug() {
      return location.pathname.slice(1);
    }
    function updateSlug() {
      const slug = PAGE_TO_SLUG[getPage()];
      if (slug != null) {
        history.replaceState(history.state, '', '/' + slug);
      }
    }
    const observer = new MutationObserver(function() {
      if (redirected) return;
      const nav = document.querySelector('.notion-topbar');
      const mobileNav = document.querySelector('.notion-topbar-mobile');
      if (nav && nav.firstChild && nav.firstChild.firstChild
        || mobileNav && mobileNav.firstChild) {
        redirected = true;
        updateSlug();
        const onpopstate = window.onpopstate;
        window.onpopstate = function() {
          if (slugs.includes(getSlug())) {
            const page = SLUG_TO_PAGE[getSlug()];
            if (page) {
              history.replaceState(history.state, 'bypass', '/' + page);
            }
          }
          onpopstate.apply(this, [].slice.call(arguments));
          updateSlug();
        };
      }
    });
    observer.observe(document.querySelector('#notion-app'), {
      childList: true,
      subtree: true,
    });
    const replaceState = window.history.replaceState;
    window.history.replaceState = function(state) {
      if (arguments[1] !== 'bypass' && slugs.includes(getSlug())) return;
      return replaceState.apply(window.history, arguments);
    };
    const pushState = window.history.pushState;
    window.history.pushState = function(state) {
      const dest = new URL(location.protocol + location.host + arguments[2]);
      const id = dest.pathname.slice(-32);
      if (pages.includes(id)) {
        arguments[2] = '/' + PAGE_TO_SLUG[id];
      }
      return pushState.apply(window.history, arguments);
    };
    const open = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function() {
      arguments[1] = arguments[1].replace('${MY_DOMAIN}', 'www.notion.so');
      return open.apply(this, [].slice.call(arguments));
    };
  </script>`, {
      html: true
    });
  }
}

async function appendJavascript(res, SLUG_TO_PAGE) {
  return new HTMLRewriter()
    .on('title', new MetaRewriter())
    .on('meta', new MetaRewriter())
    .on('link', new MetaRewriter())
    .on('head', new HeadRewriter())
    .on('body', new BodyRewriter(SLUG_TO_PAGE))
    .transform(res);
}
