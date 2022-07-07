import { VirtualFileSystem } from './VirtualFileSystem'

export async function readFile(
  fs: VirtualFileSystem,
  path: string
): Promise<string> {
  const file = (await fs.open(path, 'r')) as ReadableStream
  const reader = file.getReader()

  let done
  let content = ''

  do {
    const chunk = await reader.read()
    content += chunk.value || ''
    done = chunk.done
  } while (!done)

  return content
}

export async function writeFile(
  fs: VirtualFileSystem,
  path: string,
  content: string,
  mode: string = 'w'
): Promise<void> {
  const file = (await fs.open(path, mode)) as WritableStream
  const writer = file.getWriter()
  await writer.write(content)
  await writer.close()
}
