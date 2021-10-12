import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Three Column with Heading",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "text_string_0",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "Button"
    }, {
      name: "link_link_0",
      type: CommonFieldTypes.GeneralLink,
      standardValue: ""
    }, {
      name: "src_object_1",
      type: CommonFieldTypes.Image,
      standardValue: "http://localhost:8081/graphics/default.png"
    }, {
      name: "text_string_2",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "Button"
    }, {
      name: "link_link_2",
      type: CommonFieldTypes.GeneralLink,
      standardValue: ""
    }, {
      name: "src_object_3",
      type: CommonFieldTypes.Image,
      standardValue: "http://localhost:8081/graphics/default.png"
    }, {
      name: "text_string_4",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "Button"
    }, {
      name: "link_link_4",
      type: CommonFieldTypes.GeneralLink,
      standardValue: ""
    }, {
      name: "text_string_5",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "HEADER"
    }, {
      name: "src_object_6",
      type: CommonFieldTypes.Image,
      standardValue: "http://localhost:8081/graphics/default.png"
    }, {
      name: "text_string_7",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual."
    }, {
      name: "text_string_8",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual."
    }, {
      name: "text_string_9",
      type: CommonFieldTypes.SingleLineText,
      standardValue: "Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual."
    }]
  });
}
