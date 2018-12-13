import React from "react";

import Message from "./Message";

function MessageList(props) {
  return (
    <div>
        {props.messages.map(m => <Message key={m.id} id = {m.id} value={m.value} />)}
    </div>
  );
}

export default MessageList;