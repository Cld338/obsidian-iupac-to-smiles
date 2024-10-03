# IUPAC to SMILES Obsidian Plugin

This Obsidian plugin converts IUPAC chemical names into SMILES notation.

## Description

The "IUPAC to SMILES" plugin allows users to easily convert chemical names written in IUPAC format within an Obsidian note into SMILES notation, which is more suitable for computational processing. This plugin is useful for researchers and students in chemistry who work with chemical structures.

## Key Features

- **Easy Conversion**: Converts IUPAC names to SMILES within code blocks.
- **Seamless Integration**: Perform conversions directly within the Obsidian editor.
- **Multi-Conversion Support**: Converts multiple IUPAC names in a single note at once.

## Installation

1. **Download the Plugin**:
   - Download the latest version of the plugin from the [GitHub repository](#).

2. **Install the Plugin**:
   - Copy the `main.js` and `manifest.json` files into your Obsidian vault's plugin folder: `.obsidian/plugins/iupac-to-smiles`. If the folder doesn’t exist, create it.

3. **Enable the Plugin**:
   - Open Obsidian and navigate to **Settings** -> **Community Plugins**.
   - Disable **Safe Mode**.
   - Find "IUPAC to SMILES" in the list of available plugins and enable it.

## Usage

1. **Write IUPAC Names**:
   - In a note, create a code block with the language set to `iupac`, and write the chemical name:

     \`\`\`iupac
     ethanol
     \`\`\`

2. **Run the Conversion**:
   - Open the command palette (Ctrl+P on Windows or Cmd+P on Mac), search for **"Convert IUPAC Name to SMILES"**, and run the command.

3. **View the Result**:
   - The code block will be converted to `smiles` format with the corresponding SMILES notation:

     \`\`\`smiles
     CCO
     \`\`\`

## Requirements

- **Obsidian Version**: 0.9.12 or higher
- **Internet Connection**: Required for converting IUPAC names to SMILES via an external API.

## Notes

- This plugin uses the [NCI Cactus Chemical Identifier Resolver](https://cactus.nci.nih.gov/chemical/structure) API to perform conversions.
- Ensure you comply with the API's terms of use and usage limitations.

## Contributing

- If you find any bugs or have feature requests, please submit them through the [GitHub Issues](#) page.
- Contributions through pull requests are welcome.

## License

- This plugin is licensed under the [MIT License](#).

## Acknowledgments

- Special thanks to the NCI Cactus for providing the chemical structure conversion services used in this plugin.

## Contact

- For any questions or support, feel free to reach out via email at [your-email@example.com].
