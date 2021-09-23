import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Three-Column with Heading",
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
      name: "link_link_2",
      type: CommonFieldTypes.GeneralLink
    }, {
      name: "src_object_3",
      type: CommonFieldTypes.Image
    }, {
      name: "text_string_4",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "link_link_4",
      type: CommonFieldTypes.GeneralLink
    }, {
      name: "text_string_5",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "src_object_6",
      type: CommonFieldTypes.Image
    }, {
      name: "text_string_7",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "text_string_8",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "text_string_9",
      type: CommonFieldTypes.SingleLineText
    }]
  });
}
