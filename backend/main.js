/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function doGet() {
    let template = HtmlService.createTemplateFromFile("public/index");
    return template
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag(
        "viewport",
        'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"'
      )
      .setTitle("Nombre Proyecto");
  }