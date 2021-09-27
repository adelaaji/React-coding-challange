import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Repeating-Cards",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "src_object_0",
      type: CommonFieldTypes.Image
    }, {
      name: "src_object_1",
      type: CommonFieldTypes.Image
    }, {
      name: "src_object_2",
      type: CommonFieldTypes.Image
    }, {
      name: "text_string_3",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "text_string_4",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "text_string_5",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "text_string_6",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "text_string_7",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
