import EmojiPicker from "emoji-picker-react";
import React from "react";


const EmojHandler = ({ handleReaction, emoji }) => {
  return (
    <div>
      <EmojiPicker
        reactionsDefaultOpen={true}
         onReactionClick={handleReaction}
        searchDisabled={true}
        emojiVersion="5.0"
        width={300}
        unified="1f423"
        size="25"
        lazyLoadEmojis={true}
        className={emoji ? "left-96 top-10 block" : "none"}
      />
    </div>
  );
};

export default EmojHandler;
