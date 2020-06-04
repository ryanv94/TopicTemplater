var build = "https://nr-production-discourse.s3.dualstack.us-east-1.amazonaws.com/original/3X/f/9/f92b04681dce26bab6d9e8f156355810406f5ef3.png";
var campaign = "https://nr-production-discourse.s3.dualstack.us-east-1.amazonaws.com/original/3X/0/c/0cd9922d1606339b34143f73f47a42d5a43102b5.png";
var til = "https://nr-production-discourse.s3.dualstack.us-east-1.amazonaws.com/original/3X/6/d/6db5692ee8289e31fd205fc10c4cce9eafd11a8d.png";
var feat = "https://nr-production-discourse.s3.dualstack.us-east-1.amazonaws.com/original/3X/8/8/88fde821109e0d3ac65752d2b28d5bf90d67f605.png";
var lvlups = "https://nr-production-discourse.s3.dualstack.us-east-1.amazonaws.com/original/3X/2/4/24e0ad9c7c3e993cb58d7e4ce484f4e18d9fdd58.png";
var bpg = "https://nr-production-discourse.s3.dualstack.us-east-1.amazonaws.com/original/3X/f/f/ff42f6691127bc45f9363a63e0a9a221fb74b45b.png";
var oh = "https://nr-production-discourse.s3.dualstack.us-east-1.amazonaws.com/original/3X/1/3/13deb202b10a8386a15e45460e6d60382a0c52d3.png";

var boxTitle, boxBody, boxUrl, boxType, boxImg, boxLink;

function myFunc() {
    boxTitle = document.getElementById('boxTitle').value;
    boxBody = document.getElementById('boxBody').value;
    boxUrl = document.getElementById('boxUrl').value;
    boxType = document.getElementById('boxType').value;
    boxLink = document.getElementById('boxLink').value;

    if (boxType == 0) {
        boxImg = build;
    } else if (boxType == 1) {
        boxImg = campaign;
    } else if (boxType == 2) {
        boxImg = til;
    } else if (boxType == 3) {
        boxImg = feat;
    } else if (boxType == 4) {
        boxImg = lvlups;
    } else if (boxType == 5) {
        boxImg = bpg;
    } else if (boxType == 6) {
        boxImg = oh;
    }



    document.getElementById("results").innerHTML = "<pre><code><xmp><div style=\"background: rgba(212, 212, 212, 0.4);  padding-bottom: 20px;\"><br>\n   <a href=" + '"' + boxUrl + '"' + "><img src=" + '"' + boxImg + '"' + " height=\"75\"></a><br>\n   <a href=" + '"' + boxUrl + '"' + "><h2>" + boxTitle + "</h2></a>\n   <a href=" + '"' + boxUrl + '"' + "><p>" + boxBody + "</p></a>\n   <a href=" + '"' + boxUrl + '"' + "><strong>" + boxLink + "</strong></a>\n</div></xmp></code></pre>";

    return false;
}

function textCopy() {
    var copyText = document.getElementById("results");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}