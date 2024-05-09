Use poetika;
-- Insertar datos en la tabla Autores
INSERT INTO author (author_id, name, born) VALUES
(1, 'Gabriel Aresti', 1933),
(2, 'Joseba Sarrionandia', 1958),
(3, 'Lauaxeta', 1876),
(4, 'Bernardo Atxaga', 1951),
(5, 'Joxe Azurmendi', 1941),
(6, 'Maite Zaitut', 1965),
(7, 'Itziar Ariztimuño', 1970),
(8, 'Leire Bilbao', 1982),
(9, 'Irati Miren', 1990),
(10, 'Nerea Etxebarria', 1985);

-- Insertar datos en la tabla Poemas
INSERT INTO poem (poem_id, title, author, year_release, author_id) VALUES
(1, 'Zu zara gure indarra', 'Gabriel Aresti', 1956, 1),
(2, 'Gernika Gogoratzen', 'Gabriel Aresti', 1961, 1),
(3, 'Euskal Herriko kanta', 'Gabriel Aresti', 1959, 1),
(4, 'Euskaldunak gara', 'Gabriel Aresti', 1958, 1),
(5, 'Lur aita', 'Gabriel Aresti', 1965, 1),
(6, 'Euskal Herrian Euskaraz', 'Joseba Sarrionandia', 1980, 2),
(7, 'Ez gaude bakarrik', 'Joseba Sarrionandia', 1982, 2),
(8, 'Hau da gure poemagintza', 'Joseba Sarrionandia', 1985, 2),
(9, 'Amodiozko poema bat', 'Joseba Sarrionandia', 1978, 2),
(10, 'Izurriteak', 'Joseba Sarrionandia', 1975, 2),
(11, 'Bihar ez da gaur', 'Lauaxeta', 1910, 3),
(12, 'Gau ilun, egun argi', 'Lauaxeta', 1908, 3),
(13, 'Gaur bera', 'Lauaxeta', 1905, 3),
(14, 'Maitasunaren alde', 'Lauaxeta', 1915, 3),
(15, 'Nere maitasuna', 'Lauaxeta', 1918, 3),
(16, 'Hondarribi', 'Bernardo Atxaga', 1976, 4),
(17, 'Eskutitzak', 'Bernardo Atxaga', 1980, 4),
(18, 'Anbotoko mari', 'Bernardo Atxaga', 1978, 4),
(19, 'Euria', 'Bernardo Atxaga', 1974, 4),
(20, 'Aste santua', 'Bernardo Atxaga', 1972, 4),
(21, 'Bizitza dolu osoa', 'Joxe Azurmendi', 1965, 5),
(22, 'Gure herriak', 'Joxe Azurmendi', 1970, 5),
(23, 'Harria', 'Joxe Azurmendi', 1968, 5),
(24, 'Izena duen guztia', 'Joxe Azurmendi', 1972, 5),
(25, 'Itxaropena', 'Joxe Azurmendi', 1967, 5),
(26, 'Nire bihotza', 'Maite Zaitut', 1990, 6),
(27, 'Maitasunaren kolorea', 'Maite Zaitut', 1988, 6),
(28, 'Begira zure aurrean', 'Maite Zaitut', 1986, 6),
(29, 'Nere poema txikiak', 'Maite Zaitut', 1995, 6),
(30, 'Maitasunaren lekua', 'Maite Zaitut', 1993, 6),
(31, 'Beti zurekin', 'Itziar Ariztimuño', 1995, 7),
(32, 'Mendian gora', 'Itziar Ariztimuño', 1998, 7),
(33, 'Zurekin batera', 'Itziar Ariztimuño', 2000, 7),
(34, 'Bihotzaren soinua', 'Itziar Ariztimuño', 1992, 7),
(35, 'Ez da hutsik', 'Itziar Ariztimuño', 1997, 7),
(36, 'Begiratu nire aurpegia', 'Leire Bilbao', 2002, 8),
(37, 'Ez dut inoiz ahaztuko', 'Leire Bilbao', 2005, 8),
(38, 'Izenik ez dagoen lekuan', 'Leire Bilbao', 2008, 8),
(39, 'Ez naiz bakarrik', 'Leire Bilbao', 2010, 8),
(40, 'Nirea zara', 'Leire Bilbao', 2013, 8),
(41, 'Hori bera', 'Irati Miren', 2012, 9),
(42, 'Bihotzak hitz egin', 'Irati Miren', 2015, 9),
(43, 'Ametsak bete', 'Irati Miren', 2018, 9),
(44, 'Eguzkia urrezko lehioan', 'Irati Miren', 2020, 9),
(45, 'Izadi txikia', 'Irati Miren', 2023, 9),
(46, 'Begiak zabaldu', 'Nerea Etxebarria', 2000, 10),
(47, 'Euria', 'Nerea Etxebarria', 2003, 10),
(48, 'Harrapatuak', 'Nerea Etxebarria', 2006, 10),
(49, 'Maitasunaren bidea', 'Nerea Etxebarria', 2009, 10),
(50, 'Mendian ibiltzen', 'Nerea Etxebarria', 2012, 10);
