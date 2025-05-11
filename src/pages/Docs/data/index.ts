import auxTools from './aux_tools.json'
import dotTools from './dot_tools.json'
import filler from './filler.json'
import imageLayout from './image_layout.json'
import installing from './installing.json'
import gettingStarted from './getting_started.json'
import grid from './grid.json'
import spray from './spray.json'
import strokeTools from './stroke_tools.json'
import { PageStructure } from '../models'

export const data: PageStructure[] = [
  installing,
  gettingStarted,
  imageLayout,
  grid,
  strokeTools,
  dotTools,
  spray,
  filler,
  auxTools,
]
