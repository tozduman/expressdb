(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{212:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"size-limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size-limitations"}},[t._v("#")]),t._v(" Size Limitations")]),t._v(" "),a("p",[t._v("One of the reasons Microsoft is able to give SQL Server Express away for free is\nbecause of the limits imposed on certain facets of the server. One of the largest\nlimitations of SQL Server Express is the restriction on individual database sizes.\nNo single database can be over 10GB on modern versions. This restriction has been in place for over a decade\nand has not increased over time, even as modern data storage has become extremely\ncheap and plentiful.")]),t._v(" "),a("p",[t._v("Even if an application doesn't require storing 10GB of data immediately, over years\nof use it is not uncommon for a database to hit the ceiling on its size. When SQL\nServer Express is bundled with software, this can result in customer support calls and\nperformance degradation for end users.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/sql-express.png",alt:"SQL Server Express"}})]),t._v(" "),a("h2",{attrs:{id:"how-to-work-around-sql-server-express-s-data-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-work-around-sql-server-express-s-data-limit"}},[t._v("#")]),t._v(" How to Work Around SQL Server Express's Data Limit")]),t._v(" "),a("h3",{attrs:{id:"design-smart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-smart"}},[t._v("#")]),t._v(" Design Smart")]),t._v(" "),a("p",[t._v("Commonly, databases are created using generic data types that may provide flexibility, but\nalso come at the cost of an increased storage footprint. By assessing the below options,\na database can take up a fraction of its original size without sacrificing any actual data.")]),t._v(" "),a("p",[t._v("This advice is meant to be general and should always be assessed in the context of\nthe specific use case at hand.")]),t._v(" "),a("h4",{attrs:{id:"integers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integers"}},[t._v("#")]),t._v(" Integers")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("INT")]),a("OutboundLink")],1),t._v(" is a common data type for IDs and whole-number numeric data. With a size of 4 bytes, it isn't very big but can support numbers up to 2,147,483,647. However if it is clear that the\nvalue being captured is never going to hit anywhere near that limit, using a "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("SMALLINT")]),a("OutboundLink")],1),t._v(" for values up to 32,767 (2 bytes) or "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("TINYINT")]),a("OutboundLink")],1),t._v(" for values up to 255 (1 byte) can drastically reduce storage space. All of these types are available in SQL 2008+")]),t._v(" "),a("p",[t._v("For example, a table "),a("code",[t._v("[dbo].[state]")]),t._v(" may provide a list of all 50 states in the US.\nCommonly the ID for this table will be an "),a("code",[t._v("INT")]),t._v(" data type, but since it is unlikely\nthere will be 200+ new states any time soon, it is safe to use a "),a("code",[t._v("TINYINT")]),t._v(" instead and\nreduce the ID column's footprint to 25% of its original value.")]),t._v(" "),a("h4",{attrs:{id:"date-and-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-and-time"}},[t._v("#")]),t._v(" Date and Time")]),t._v(" "),a("p",[t._v("Similarly to integers, often times date and time datatypes are chosen that provide\nfar more detail than necessary. While some use cases necessitate the capturing of\nmilliseconds, many times precision more than a second is just excessive and provides\nno benefit to an application, yet takes up more disk space. Be sure that each type is not defaulting to a higher precision than is needed, also.")]),t._v(" "),a("p",[t._v("There are many options for date, time, and datetime values, so assess what makes the most sense for each situation and use the smallest available:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Data Type")]),t._v(" "),a("th",[t._v("Accuracy")]),t._v(" "),a("th",[t._v("Size")]),t._v(" "),a("th",[t._v("Compatibility")]),t._v(" "),a("th",[t._v("Example")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/date-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("DATE")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("One day")]),t._v(" "),a("td",[t._v("3 bytes")]),t._v(" "),a("td",[t._v("2008+")]),t._v(" "),a("td",[t._v("2018-04-02")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetime-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("DATETIME")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Rounded to increments of .000, .003, .007 sec")]),t._v(" "),a("td",[t._v("8 bytes")]),t._v(" "),a("td",[t._v("2008+")]),t._v(" "),a("td",[t._v("2018-04-02 12:35:29.123")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetime2-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("DATETIME2")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("100 nanoseconds")]),t._v(" "),a("td",[t._v("6 bytes for precisions < 3; 7 bytes for precisions 3 & 4; all others are 8 bytes")]),t._v(" "),a("td",[t._v("2008+")]),t._v(" "),a("td",[t._v("2018-04-02 12:35:29.1234567")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetimeoffset-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("DATETIMEOFFSET")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("100 nanoseconds")]),t._v(" "),a("td",[t._v("8-10 bytes")]),t._v(" "),a("td",[t._v("2008+")]),t._v(" "),a("td",[t._v("2018-04-02 12:35:29.1234567 +12:15")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/smalldatetime-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("SMALLDATETIME")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("One minute")]),t._v(" "),a("td",[t._v("4 bytes")]),t._v(" "),a("td",[t._v("2008+")]),t._v(" "),a("td",[t._v("2018-04-02 12:35:00")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/time-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("TIME")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Varies")]),t._v(" "),a("td",[t._v("3-5 bytes")]),t._v(" "),a("td",[t._v("2008+")]),t._v(" "),a("td",[t._v("12:35:29.1234567")])])])]),t._v(" "),a("h4",{attrs:{id:"decimals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decimals"}},[t._v("#")]),t._v(" Decimals")]),t._v(" "),a("p",[t._v("Similar to dates and integers, making sure only the precision necessary is being stored\nwhen dealing with "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/decimal-and-numeric-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("DECIMAL")]),t._v(" and "),a("code",[t._v("NUMERIC")]),a("OutboundLink")],1),t._v(" (functionally equivalent data types) is very important.")]),t._v(" "),a("p",[t._v("For most cases, a precision of 9 or less will suffice, which means "),a("code",[t._v("DECIMAL")]),t._v(" will only take up 5 bytes. However, if more is required, the following sizes will apply:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Precision")]),t._v(" "),a("th",[t._v("Size")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1-9")]),t._v(" "),a("td",[t._v("5 bytes")])]),t._v(" "),a("tr",[a("td",[t._v("10-19")]),t._v(" "),a("td",[t._v("9 bytes")])]),t._v(" "),a("tr",[a("td",[t._v("20-28")]),t._v(" "),a("td",[t._v("13 bytes")])]),t._v(" "),a("tr",[a("td",[t._v("29-38")]),t._v(" "),a("td",[t._v("17 bytes")])])])]),t._v(" "),a("p",[t._v("It may be tempting to consider the "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/float-and-real-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("FLOAT")]),t._v(" or "),a("code",[t._v("REAL")]),a("OutboundLink")],1),t._v(" types as well, since they can store a precision of 7 digits in 4 bytes and 15 digits in 8 bytes. However, it is integral to remember that these types are "),a("em",[t._v("floating point numerics")]),t._v(" and thus contain approximate values. Unless floating point numbers are a specific requirement, using these types can lead to rounding issues and are certainly not worth the risk for space savings.")]),t._v(" "),a("h4",{attrs:{id:"strings-and-varchars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strings-and-varchars"}},[t._v("#")]),t._v(" Strings and VARCHARs")]),t._v(" "),a("p",[t._v("Another easy way to slim down a database is choosing the right character data type format.\n"),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("NVARCHAR")]),a("OutboundLink")],1),t._v(" and "),a("code",[t._v("NCHAR")]),t._v(" store Unicode data, and are thus must-haves for storing any multilingual or localized data. Conversely, "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/data-types/char-and-varchar-transact-sql",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("VARCHAR")]),a("OutboundLink")],1),t._v(" and "),a("code",[t._v("CHAR")]),t._v(" store non-Unicode data and only take 1 byte for every 2 bytes that "),a("code",[t._v("NVARCHAR")]),t._v(" takes up. This can effectively cut a table's size in half if it is comprised mostly of a large string column, like a comment or note field.")]),t._v(" "),a("p",[t._v('So, a simple "Hello" in '),a("code",[t._v("NVARCHAR")]),t._v(" will be 10 bytes but only 5 in "),a("code",[t._v("VARCHAR")]),t._v(". The difference can be huge for not only performance, but also storage, when strings are properly typed.")]),t._v(" "),a("h3",{attrs:{id:"use-multiple-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-multiple-databases"}},[t._v("#")]),t._v(" Use Multiple Databases")]),t._v(" "),a("p",[t._v("While each "),a("em",[t._v("individual")]),t._v(" database has a size restriction, the number of databases\nin an instance is not limited any more than other versions. This leaves room to\npartition data horizontally or vertically into several databases.")]),t._v(" "),a("h4",{attrs:{id:"horizontal-partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-partitioning"}},[t._v("#")]),t._v(" Horizontal Partitioning")]),t._v(" "),a("p",[t._v("Horizontal partitioning refers to slicing data by putting rows into different tables (and databases, in this case). The tables in each database will be the same, but contain different\nsets of data based on a logical grouping, like location.")]),t._v(" "),a("p",[t._v("If a database contains data for all customers across the United States, but the data exceeds\n10GB, an option would be to create databases for regions, i.e. Northwest, Northeast, etc. and\nsplit the data across them.")]),t._v(" "),a("p",[t._v("The downside to this approach is that there are now N number of identical databases to manage when it comes to upgrades, maintenance, and backups.")]),t._v(" "),a("h4",{attrs:{id:"vertical-partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vertical-partitioning"}},[t._v("#")]),t._v(" Vertical Partitioning")]),t._v(" "),a("p",[t._v("In this context, vertical partitioning can be used to describe storing different columns and tables in different databases, as opposed to storing rows in different databases. By utilizing cross-database queries, tables in different databases can be queried and manipulated in almost the exact same way as if they were in the same database.")]),t._v(" "),a("p",[t._v("If an application had a lot of static reference data, i.e. data points on every city and town in the US, those tables could be stored in another database to separate the storage costs\nof that data from interfering with the actual customer data in the primary database.")]),t._v(" "),a("h3",{attrs:{id:"normalize-normalize-normalize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normalize-normalize-normalize"}},[t._v("#")]),t._v(" Normalize, Normalize, Normalize")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Database_normalization",target:"_blank",rel:"noopener noreferrer"}},[t._v("Normalization"),a("OutboundLink")],1),t._v(" is a huge topic, but it isn't often talked about today in terms of storage benefits, due to the low cost of disk space.")]),t._v(" "),a("p",[t._v("Proper normalization data can greatly reduce the redundancy of data. Often the most redundant data are of the string variety and thus can have a significant impact on the overall size of a database when not properly normalized. Aiming for the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Third_normal_form",target:"_blank",rel:"noopener noreferrer"}},[t._v("third normal form"),a("OutboundLink")],1),t._v(" is a reasonable goal to achieve most of the size-related benefits that normal forms can offer.")]),t._v(" "),a("p",[t._v("Since there are always exceptions as to when normalized data or denormalized data is most beneficial, it will depend on the case at hand, but defaulting to normalizing data is generally a good strategy.")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("ClientOnly",[a("disqus-component")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);