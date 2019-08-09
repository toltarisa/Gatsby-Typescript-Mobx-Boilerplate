import { observable, action } from 'mobx'

class Store {
  @observable title = 'My Gatsby Website'

  @action
  updateTitle = (title: string) => {
    this.title = title
  }
}

export default new Store();