import {
  WritableStream,
  TransformStream,
  ReadableStream,
} from 'web-streams-polyfill'

import { VirtualFile } from './VirtualFile'

export type FileStream =
  | ReadableStream<string>
  | WritableStream<string>
  | TransformStream<string>

export interface VirtualFileSystem {
  mount(): Promise<void>
  unmount(): Promise<void>

  getFile(path: string, exclusive: boolean): Promise<VirtualFile>
  free(file: VirtualFile | string): Promise<void>

  open(path: string, mode: string): Promise<FileStream>
  exist(path: string): Promise<boolean>
  remove(path: string): Promise<void>

  readFile(path: string): Promise<string>
  writeFile(path: string, content: string, mode: string): Promise<void>
}
