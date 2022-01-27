## About

This is a fork of [diagrams.net](https://app.diagrams.net), [previously draw.io](https://www.diagrams.net/blog/move-diagrams-net).

There is one plugin ontopanel, which can be found via Extra-Plugins. Click [drawio interface](https://yuechenbam.github.io/src/main/webapp/index.html) to get full editor functionality of the plugin version.

If you see any updates to this project, be sure to clear your cache (history) before opening it, otherwise the new features will not show up. If you see the error in other browsers, please use Chrome to open it.

This is a beta version, please let me know if you have any comments(yue.chen@bam.de).

## Ontopanel

The Ontopanel plugin contains three parts(tools): OntoLibary, EntityFinder, and Convertor

### OntoLibary

The libary is designed for whole Ontopanel plugin. It is based on Chowlk libary, but has some different features. These features are so designed, that users can convert and map-data in the plugin. It will be released later.

### EntityFinder(old)

This old entityfinder will be replaced with news together with new libary.

EntitiyFinder has a built-in MSEO ontology, but users can upload their own ontologies. Registered users can also save their ontologies in the database.
EntitiyFinder is designed as a simplified version of protege. So it should display all entities in tree structure and all details (annotations, sub-relations, equivalents, domains, ranges...) in a tree structure . If there is any information missing, you can contact me to fix the bug.

Please click to see how to use the plugin of ontopanel:

https://user-images.githubusercontent.com/90606851/142880943-cba48e34-dd05-424e-91e3-b0f5308684a8.mp4

### Convertor

Users can convert the plot directly in convertor. The convertor can check the errors that are made in plot.
If chowlk libary, instead of ontopanel-libary are used, please transform it first.

The data-mapping functionality will be added later to the convertor.

### Version

**27.01.2022(latest):**

- new version Ontopanel is released.
  - Convertor are added. User can convertor plot to OWL directly.
  - New EntityFinder and ontoLibary will be relased soon.

**22.11.2021:**

- new version Ontopanel is released. ImportOnto might be removed later.
  - You can register and login. Data is saved in databank. Please do **NOT** keep confidential data in the database.
  - Changed table structure to tree structure, and added more details of each entity.(Similar to Protege)
  - Probelm: due to server problem, you can not import large ontology files, this will be solved with new server.
  - If you have any suggestions, please write me an email or open an issue here.

**12.10.2021:**

- Activate "+" button. You can import ontology via file or URL now.

**06.10.2021:**

- Added colors to the MESO ontology, datavalue button, and a prefix button to output the namespaces used in this ontology.

- Color descriptions (including inferred subclasses):
  - Subclasses of process (equivalent to continuant in BWMD) in green: "#1C9E71",
  - Subclasses of InformationContentEntities (equivalent to ocurrent in BWMD) in yellow: "#F0F000",
  - Subclasses of InformationBearingArtifact (equivalent to quality in BWMD) in gray: "#DADADA",
  - DataValues in orange: "#FF8C00", taken from Protege.
  - Rest in black.
