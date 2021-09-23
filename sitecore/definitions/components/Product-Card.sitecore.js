import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Product-Card",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "text_string_0",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "link_link_0",
      type: CommonFieldTypes.GeneralLink
    }, {
      name: "src_object_1",
      type: CommonFieldTypes.Image
    }, {
      name: "text_string_2",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "text_string_3",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
