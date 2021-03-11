function cevir() {
  let yil = process.argv[3];
  let a = process.argv[2];
  if (Number(a) > 621) {
    let b = Number(a) - 621;
    let c = Number(b) / 33;
    let mld = Number(c.toFixed(0)) + Number(b);
    console.log("girilen yıl hicri olarak= " + mld);
  } else if (Number(yil) > 0) {
    let yeniYil = Number(yil) / 33;
    let ckn = Number(yil) - Number(yeniYil.toFixed(0));
    let hcr = Number(ckn) + 622;
    console.log("girilen yıl miladi olarak= " + hcr);
  } else {
    console.log("tarihler yanlış girildi kontrol ediniz.");
  }
}
module.exports = cevir();
