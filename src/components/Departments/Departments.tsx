import React from 'react'
import './departments.css'
import { Header } from '..'
import Department from './Department'
import { guid } from '../../utils/generateID'

interface Props {
  data: IDepartment[]
}

interface State {
  active: IDepartment
}

class Departments extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      active: props.data[0]
    }
  }

  onMouseOver = (data: IDepartment) => {
    const { active } = this.state
    if (active.id.valueOf() !== data.id.valueOf()) {
      this.setState({ active: data })
    }
  }
  render() {
    const { data } = this.props
    return (
      <div className="departments">
        <div className="page-wrapper">
          <Header type="h2" colored>
            Departments
          </Header>
        </div>
        <div className="flex-container">
          <img
            src={this.state.active.image}
            alt="Deparment"
            className="bg-img"
          />
          {data.map((info: IDepartment) => (
            <Department key={guid()} mouseOver={this.onMouseOver} data={info} />
          ))}
        </div>
      </div>
    )
  }
}
export default Departments
