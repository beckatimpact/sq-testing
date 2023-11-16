!function(a,b){a("squatch","https://fast.ssqt.io/squatch-js@2",b)}(function(a,b,c){var d,e,f;c["_"+a]={},c[a]={},c[a].ready=function(b){c["_" + a].ready =  c["_" + a].ready || [];c["_" + a].ready.push(b);},e=document.createElement("script"),e.async=1,e.src=b,f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(e,f)},this);


// window.squatchTenant = "test_ap2255y19gte1";


squatch.ready(function () {
    squatch
    .api()
    .squatchReferralCookie()
    .then(function (response) {

        const waitForElement = setInterval(function () {
            
        const el = document.getElementsByName("ssqt_referralcookies");

        if (el.length) {
            clearInterval(waitForElement);

            el[0].value = response.encodedCookie;
            }
        }, 100);
    });

});
