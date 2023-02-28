import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteDo = id => {
    console.log('prem in History')
    console.log(`prem in History ${id}`)
    const results = usersList.filter(eachItem => eachItem.id !== id)
    this.setState({})
  }

  render() {
    const {searchInput, historyList} = this.state
    const {usersList} = this.props
    const searchResults = usersList.filter(eachItem =>
      eachItem.title.includes(searchInput),
    )

    return (
      <div>
        <h1>Prem</h1>
        <input type="search" onChange={this.onSearch} />
        <ul>
          {searchResults.map(eachItem => (
            <HistoryItem
              details={eachItem}
              key={eachItem.id}
              deleteItem={this.deleteDo}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default History
