import { Plugin } from 'obsidian';

export default class ChemistryPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'obsidian-iupac-to-smiles',
            name: 'Convert IUPAC Name to SMILES',
            editorCallback: async (editor, view) => {
                const doc = editor.getDoc();
                const content = doc.getValue();
                const convertedContent = await this.convertIUPACToSmiles(content);
                doc.setValue(convertedContent);
            }
        });
    }

    async convertIUPACToSmiles(content: string): Promise<string> {
        const iupacRegex = /```IUPAC\n([\s\S]*?)\n```/g;
        let match;
        let convertedContent = content;

        while ((match = iupacRegex.exec(content)) !== null) {
            const iupac = match[1].trim();
            const smiles = await this.getSMILESFromIUPAC(iupac);
            convertedContent = convertedContent.replace(match[0], `\`\`\`smiles\n${smiles}\n\`\`\``);
        }
        return convertedContent;
    }

    async getSMILESFromIUPAC(iupac: string): Promise<string> {
		const url = `https://cactus.nci.nih.gov/chemical/structure/${encodeURIComponent(iupac)}/SMILES`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return await response.text();
        } catch (error) {
            console.error("Error fetching SMILES: ", error);
            return "Error: Could not fetch SMILES";
        }
    }
}
