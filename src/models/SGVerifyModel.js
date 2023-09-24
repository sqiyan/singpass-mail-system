import { v4 as uuidv4 } from 'uuid';

function generateNonce() {
    // Generate a random nonce (UUID)
    const nonce = uuidv4();

    return nonce;
}

// 1) Forming the SG - Verify URL with the query parameters:
function formSgVerifyURl() {
    var baseUrl = "https://app.singpass.gov.sg/sgverify";
    var nonce = generateNonce();
    var currentTime = Date.now() // Get current system time
    var expiryTime = currentTime+600000 // Set expiry to 10 minutes
    
    /** static QR
    var sgverifyURl = baseUrl +
        "?callback=" + "https%3A%2F%2Ftest.yourcallbackurl%2Fcallback" +
        "&client_id=" + "STG2-SGVERIFY-SELF-TEST" +
        "&qr_type=" + "static" +
        "&signature_method=" + "RS256"+
        "&state=" + "kiosk001" +
        "&timestamp_expiry=" + "1602324610000" + // Saturday, 10 October 2020 10:10:10
        "&timestamp_start=" + "1570702210000" + // Thursday, 10 October 2019 10:10:10
        "&v=" + "2" ;
    **/

    // dynamic QR
    var sgverifyURl = baseUrl +
        "?callback=" + "https%3A%2F%2Ftest.yourcallbackurl%2Fcallback" +
        "&client_id=" + "STG2-SGVERIFY-SELF-TEST" +
        "&nonce=" + nonce +
        "&qr_type=" + "dynamic" +
        "&signature_method=" + "RS256"+
        "&state=" + "kiosk001" +
        "&timestamp_expiry=" + expiryTime + // Set expiry to 10 minutes
        "&timestamp_start=" + currentTime + // Get current system time
        "&v=" + "2" ;

    return sgverifyURl;
}


// 2) Sign the SG - Verify URL on Step(1) with your private key:
function signSgVerifyURL(sgverifyURl) {

    // Read your private key using FS (Recommended: read it from keystore)
    var keytoSign = {
        key: fs.readFileSync(keyCertContent, 'utf8')
    };

    var signedSgVerifyURl = crypto.createSign('RSA-SHA256')
        .update(sgverifyURl)
        .sign(keytoSign, 'base64');

    // signedSgVerifyURl= MEyCBY/XSBBBg8fDhRxbZNC+LQbz1eGhQLr3wnT+sLn1d3ms/SxJYBGjb4grIeG673P31jPwqyGgIt//+chYDK1ToBQ67tK25dnBRXECooWW12q+LYMZPpRCFPxZpowT2IaKsiFZm/RD5l3ZQNCb8HGsOGynyZPtEnXCNu8Ar5pWAVG/F00JtW2rX25gT7xOS3Yhpfkpsmz3grPTI0YHKrH379z8yHeK+PnmgH+8R8fbqEzek/++CQhgB0FAO0qYd7l6bTMeTQHa3G9CMeBt3OWM1oCHw/fpQJHbbLdmtN7/fXHUsYkidd4jgsYCNstbssdQmQ+3Zlb41Ov3m4pyrg==

    return signedSgVerifyURl;
}


// 3) Assembling the signature into SG-Verify URL
function assemblingSgVerifyUrlWithSignature(sgverifyURl,signedSgVerifyURl) {

    var sgverifyURlwithSignature= sgverifyURl +
    "&signature=" + signedSgVerifyURl;


    //sgverifyURlwithSignature = https://app.singpass.gov.sg/sgverify?callback=https%3A%2F%2Ftest.yourcallbackurl%2Fcallback&client_id=STG2-SGVERIFY-SELF-TEST&expiry_timestamp=1575540722000&nonce=4110833&qr_type=dynamic&state=kiosk001&v=2&signature_method=RS256&signature=hTMkaZzmcVLCkKF7cpAlcFZweTBeSs8A1yo5/ueAoJzvXt8KmTfjyUhxFXnpJGUdWXuDVsu7pHsQWor/t/50wSR7FBvjmWJEzin9g8erDarC14zKJspi1ENa11Rt9xa3K8jkmK8nazpjnwkAIWvRqeBAyfn8P1QrQSFIFJjxKUgWZ7kZexS3raZJ+DCSGRPFSx55f9xuAdWEsmME1JvZNTf3TjMo0ulZepyGKYbcTiry/1U6VQWhDOpXELLOCtMiWzOd/LNocbQ5F2mti8PmouXlDcWnxR+unOsk0jlC2/2db1xjTxf35EkZ31DOtGMb+fHNT042cUFo6yEzu6ROrQ==


    return sgverifyURlwithSignature;
}
