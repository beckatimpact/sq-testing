!function(a,b){a("squatch","https://fast.ssqt.io/squatch-js@2",b)}(function(a,b,c){var d,e,f;c["_"+a]={},c[a]={},c[a].ready=function(b){c["_" + a].ready =  c["_" + a].ready || [];c["_" + a].ready.push(b);},e=document.createElement("script"),e.async=1,e.src=b,f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(e,f)},this);

window.squatchTenant = "test_aym93okveuya4";



squatch.ready(function () {

  squatch.api().squatchReferralCookie().then(function(response) {

    // Retrieve the full list of codes
    var codesList = Object.values(response.codes);
    if(codesList.length > 0){
       document.getElementById('referralCodes').value = codesList.join(", ");
    }

    // Heirarchy -- will use `example-program` as default or `secondary-program` if no cookie is found for the former
    document.getElementById('referralCode').value = response.codes['example-program'] || response.codes['secondary-program']; 

    });
  });