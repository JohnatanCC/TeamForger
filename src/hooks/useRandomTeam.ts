// ======== > src/hooks/useRandomTeam.ts < ========
import { useCallback } from 'react';
import { characters } from '../data/charactersData'; // Importar o array de personagens

const useRandomTeam = () => {
  const generateRandomTeam = useCallback(() => {
    // Separar os personagens por classe
    const tanks = characters.filter(character => character.class === 'Tank');
    const supports = characters.filter(character => character.class === 'Suporte');
    const others = characters.filter(character => character.class !== 'Tank' && character.class !== 'Suporte');

    // Garantir que ao menos um Tank e um Suporte sejam incluídos
    const randomTank = tanks[Math.floor(Math.random() * tanks.length)];
    const randomSupport = supports[Math.floor(Math.random() * supports.length)];

    // Gerar aleatoriamente outros personagens
    const remainingCharacters: { id: string; name: string; icon: any; portrait: any; class: string; health: number; equipament: string; special: string; items: { bodyArmor: any; bodyArmorLv2: any; headArmor: any; weapon: any; weaponLv2: any; }; }[] = [];
    while (remainingCharacters.length < 4) {
      const randomCharacter = others[Math.floor(Math.random() * others.length)];
      if (!remainingCharacters.includes(randomCharacter)) {
        remainingCharacters.push(randomCharacter);
      }
    }

    // Retornar o time completo
    return [randomTank, randomSupport, ...remainingCharacters];
  }, []);

  return generateRandomTeam;
};

export default useRandomTeam;
