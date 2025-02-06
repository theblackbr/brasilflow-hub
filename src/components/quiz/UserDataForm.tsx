
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserData } from "@/types/quiz";

interface UserDataFormProps {
  userData: UserData;
  onDataChange: (field: keyof UserData, value: string) => void;
}

export const UserDataForm = ({ userData, onDataChange }: UserDataFormProps) => (
  <div className="space-y-8 animate-fadeIn max-w-2xl mx-auto w-full px-4">
    <h2 className="text-3xl font-bold text-white mb-8">
      Receba suas recomendações por email
    </h2>
    <div className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="nome" className="text-white">Nome</Label>
        <Input
          id="nome"
          value={userData.nome}
          onChange={(e) => onDataChange("nome", e.target.value)}
          placeholder="Seu nome completo"
          className="bg-secondary/50 text-white placeholder:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">Email</Label>
        <Input
          id="email"
          type="email"
          value={userData.email}
          onChange={(e) => onDataChange("email", e.target.value)}
          placeholder="seu@email.com"
          className="bg-secondary/50 text-white placeholder:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telefone" className="text-white">Telefone</Label>
        <div className="flex gap-2">
          <Select
            value={userData.codigoPais}
            onValueChange={(value) => onDataChange("codigoPais", value)}
          >
            <SelectTrigger className="w-[100px] bg-secondary/50 text-white">
              <SelectValue placeholder="País" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="+1" className="text-gray-900 hover:bg-gray-100">🇺🇸 +1</SelectItem>
              <SelectItem value="+55" className="text-gray-900 hover:bg-gray-100">🇧🇷 +55</SelectItem>
              <SelectItem value="+44" className="text-gray-900 hover:bg-gray-100">🇬🇧 +44</SelectItem>
              <SelectItem value="+351" className="text-gray-900 hover:bg-gray-100">🇵🇹 +351</SelectItem>
              <SelectItem value="+34" className="text-gray-900 hover:bg-gray-100">🇪🇸 +34</SelectItem>
            </SelectContent>
          </Select>
          <Input
            id="telefone"
            type="tel"
            value={userData.telefone}
            onChange={(e) => onDataChange("telefone", e.target.value)}
            placeholder="(555) 123-4567"
            className="flex-1 bg-secondary/50 text-white placeholder:text-gray-400"
          />
        </div>
      </div>
    </div>
  </div>
);
