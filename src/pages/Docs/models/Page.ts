import { Component } from './Component'

export class Page {

  constructor(
    public readonly target: string,
  ) {}

  public async getContent(): Promise<Component[]> {
    const { dataFileName } = this
    const data: DataImport = await import( `../data/${ dataFileName }.json` )
    const content: Component[] = data.default
    return content
  }

  private get dataFileName(): string {
    const fileNameWords: string[] = this.target.split( '-' )
    return fileNameWords.join( '_' )
  }

  get title(): string {
    const { target } = this
    return `docs-${ target }-title`
  }

}

interface DataImport {
  default: Component[]
}
