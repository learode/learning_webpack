import _ from "lodash";

const head_text = (title) => {
    return _.join([title, 'import', 'statment', 'into', 'lodash'], ' ');
};

export default head_text;
