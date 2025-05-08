import { Component } from './Component'

export interface TextComponent extends Component {
  type: 'subtitle' | 'info' | 'warning' | 'p'
  text: string
}
