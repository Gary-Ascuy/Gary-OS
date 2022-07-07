export interface DockOption {
  id: string
  name: string
  icon: string

  action: (open: (props: any) => void) => Promise<void>
}
