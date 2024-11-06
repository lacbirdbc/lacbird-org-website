import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Selector() {
  return (
    <Select>
      <SelectTrigger className="w-18 h-6">
        <SelectValue placeholder="Eng" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="apple">Eng</SelectItem>
          <SelectItem value="banana">Vi</SelectItem>
          <SelectItem value="blueberry">Jp</SelectItem>
          <SelectItem value="grapes">Cn</SelectItem>
          <SelectItem value="pineapple">Tw</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
