import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  return (
    <li className="emoji-item">
      <button type="button" onClick={onClickEmojiCard} className="emoji-btn">
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
