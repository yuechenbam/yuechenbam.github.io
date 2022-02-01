## About

This is a fork of [diagrams.net](https://app.diagrams.net), [previously draw.io](https://www.diagrams.net/blog/move-diagrams-net).

There is one plugin ontopanel, which can be found via Extra-Plugins. Click [drawio interface](https://yuechenbam.github.io/src/main/webapp/index.html) to get full editor functionality of the plugin version.

If you see any updates to this project, be sure to clear your cache (history) before opening it, otherwise the new features will not show up. If you see the error in other browsers, please use Chrome to open it.

This is a beta version, please let me know if you have any comments(yue.chen@bam.de).

## Ontopanel

The Ontopanel plugin contains three parts(tools): Ontopanel-Libary, EntityFinder, and Convertor

### Ontopanel-Library

The library is designed for whole Ontopanel plugin. It is based on Chowlk libary, but has some different features.

1. Load automatically in the sidebar.
2. Each shape has hover effect and shape data.
3. All the shape contains a "Type" attribute, Class, ObjectProperty, DatatypeProperty, AnnotationProperty, DataType, DataValue and Individual contain also "IRI" attribute.
4. "Type", "IRI_XX", "Mapping_XX" are preserved words, try not to use them for other purposes in shape data.

### Ontopanel-EntityFinder

EntityFinder is a tool that allows user to upload their ontologies and export in drawio.
EntitiyFinder has a built-in MSEO ontology, but users can upload their own ontologies. Registered users can also save their ontologies in the database.
EntitiyFinder is designed as a simplified version of protege. So it should display all entities in tree structure and all details (annotations, sub-relations, equivalents, domains, ranges...) in a tree structure . If there is any information missing, you can contact me to fix the bug.

#### New features

1. User can select to show all entities in URI or RDFLabel
2. Together with Ontopanel-Library, entities can be showed in RDFLabel in the plot, IRI is saved in shape data.

#### EntityFinder(old)

The old version, which is suitable for chowlk library. It contains most features.

Please click to see how to use the plugin of EntityFinder:



https://user-images.githubusercontent.com/90606851/151941411-dbd18f0b-908b-4334-a412-c24f866bc9f4.mp4



### Ontopanel-Convertor

Convertor that convert current plot to owl ontology.

1. It can check the errors that are made in plot.
2. User can download the file.
3. User can realize data-mapping.(Under development)
4. If chowlk libary, instead of ontopanel-libary are used, please transform it first.

Please click to see how to use the plugin of Convertor:

https://user-images.githubusercontent.com/90606851/151398860-ee07dd9e-8f8c-4e3e-add1-2e923fa4d1f0.mp4

### Version

**01.02.2022(latest):**

- new version Ontopanel-pipeline is released.
  - library, entityfinder, and convertor are added.

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
