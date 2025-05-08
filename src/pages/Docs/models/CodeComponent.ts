import { Component } from './Component'

export interface CodeComponent extends Component {
  type: 'code'
  code: string
  language: string
  fileName: string
  preview?: string
  maximizable: false

}

