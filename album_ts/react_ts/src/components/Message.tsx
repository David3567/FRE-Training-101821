import React from "react";

interface Props {
    artist : string;
    result_count: number;
}

const Message:React.FC <Props>= (props) => {
    return (
        <section className="result_summary">
      <p className="result_msg">
        Search Albums by "{props.artist}": {props.result_count} results
      </p>
    </section>
    )
}

/*
function Message(pros) {
  return (
    <section className="result_summary">
      <p className="result_msg">
        Search Albums by "{pros.artist}": {pros.result_count} results
      </p>
    </section>
  );
}

*/

export default Message;