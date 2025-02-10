// gtm-head.js
export const initGTMHead = (containerId) => {
    // Create the GTM script element
    const script = document.createElement('script');
    script.innerHTML = '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${containerId}');';

    // Add it to the head
    document.head.insertBefore(script, document.head.firstChild);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
};
