(function() {
    const shortsSelectors = [
        'ytd-rich-grid-media[is-shorts]',
        'a[href*="/shorts/"]',
        'a[title="Shorts"]',
        'ytd-thumbnail[href*="/shorts/"]',
        '.ShortsLockupViewModelHostOutsideMetadataSubhead',
        'hortsLockupViewModelHostOutsideMetadata',
        'h2[aria-label="Shorts"]',
        'h2#title.style-scope.ytd-rich-shelf-renderer',    
      ]
    function hideShorts() {
    
      shortsSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.style.display = 'none');
      });
    }
  
    hideShorts();
  
    const observer = new MutationObserver(hideShorts);
    observer.observe(document.body, { childList: true, subtree: true });
  })();
  