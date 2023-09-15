import { useEffect, useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import { api } from "@/lib/axios";

interface Prompts {
  id: string
  title: string
  template: string
}

interface PromptSelectProps {
  onPromptSelected: (prompt: string) => void
}


export function PromptSelect({ onPromptSelected }: PromptSelectProps) {
  const [prompts, setPrompts] = useState<Prompts[] | null>(null)

  useEffect(() => {
    api.get('/prompts').then(response => setPrompts(response.data))
  }, [])

  function handlePromptSelected(promptId: string) {
    const selectedPrompt = prompts?.find(prompt => prompt.id === promptId)
    if( !selectedPrompt) {
      return
    }
    onPromptSelected(selectedPrompt.template)
  }

  return (
    <Select onValueChange={handlePromptSelected}>
      <SelectTrigger>
        <SelectValue placeholder="Select a prompt..." />
      </SelectTrigger>
      <SelectContent>
        {prompts?.map(prompt => <SelectItem key={prompt.id} value={prompt.id}>
          {prompt.title}
        </SelectItem>)}
      </SelectContent>
    </Select>
  )
}