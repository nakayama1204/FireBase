import { h } from "vue";

export default {
  functional: true,
  props: {
    tag: { type: String, required: false, default: "p" },
    text: { type: String, required: true },
    class: { type: String, required: false, default: "" }
  },
  setup(props) {
    return () =>
      h(
        props.tag,
        {
          class: props.class
        },
        props.text
          .split("\n")
          .reduce((accumulator, string, index, arr) => {
            if (!Array.isArray(accumulator)) {
              return [accumulator, string, h("br")];
            }
            if (arr.length - 1 === index) {
              return accumulator.concat([ string ]);
            }
            return accumulator.concat([ string , h("br") ]);
          }, []),
          console.log(JSON.stringify(props)),
      );
  }
};