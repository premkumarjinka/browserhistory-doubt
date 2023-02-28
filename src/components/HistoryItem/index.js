import './index.css'

const HistoryItem = props => {
  const {details, deleteItem} = props
  const {id, title, domainUrl, timeAccessed} = details

  const onButton = () => {
    console.log(`Prem clicked on Button ${id}`)
    deleteItem(id)
  }
  return (
    <li>
      <h1>{title}</h1>
      <p>{domainUrl}</p>
      <p>{timeAccessed}</p>
      <p>{id}</p>
      <button type="button" onClick={onButton}>
        Prem
      </button>
    </li>
  )
}
export default HistoryItem
