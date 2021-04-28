---
title: Analytics Framework
description: Components of an analytics framework.
authors:
  - anu-jain
publish: 2021-02-23T12:00:00Z
categories:
  - analytics-operations
  - business-strategy
cover: analytics-framework
feature: false
---

Last week I talked about the characteristics and advantages of a
theoretical analytics framework and why it's so critical to have one to
guide your analytics initiative. As important as the theoretical
framework is, however, it must be backed up by a sound technical
infrastructure. The tools and technologies you choose to implement
analytics will largely determine the success of your project. The right
combination of tools and technologies will help embed analytics into
your corporate DNA and drive better business outcomes.

I'm not going to get deeply technical here, and I'm not going to discuss
all the components of the analytics framework — there's simply not
enough space. My focus here is solely on that part of the framework that
spans data ingestion, preparation, and discovery.

There are basically two types technologies
used to capture, manipulate, and deliver data to users: the data
warehouse and the data lake. My focus here will be the data lake.

To be sure, the data warehouse is a powerful platform for analytics
delivery. However, building data warehouses is logistically and
technical complex, costly, and time-consuming. Though there are
companies that have gotten it "right" such as WalMart and Amazon, there
are also countless stories of data warehousing gone terribly wrong.

I believe that data lakes — for all their documented pitfalls — enable
the fastest, most flexible platform for analytics data delivery. Unlike
data warehouses, data lakes ingest data — of virtually all types — in
its native form, and only upon query by the user is that data formatted
for analysis. Data lakes also typically use open-source storage
technology such as Hadoop, so the storage costs are greatly reduced.

Data lakes also support traditional technical functionality such as
cleansing and governance, and their structure — organization and
formatting when the user queries the data, rather than on entry into the
data lake — enables flexible, deep analysis using multiple data types
simultaneously.

Maybe the most important advantage of a data lake, however, is its speed
to deployment. Data lakes — because the data is ingested in its native
format, and because the storage is open source — can be developed and
deployed much more quickly than a data warehouse — which delivers better
business outcomes faster and cheaper.

As I said above, although they deliver powerful results, data lakes
really only have three processes: data ingestion, preparation, and
discovery.

For data ingestion, most data lake technologies support batch loads of
data. However, for near-real-time analysis, what's needed is a data lake
product that supports both batch and streaming data ingestion in
virtually any format. With this capability, analysts can query the
system and get data that has almost zero latency, thus helping them ask
and answer questions — and make decisions that have an almost immediate
impact on the business.

The preparation process is where native-format data that has been
ingested into the data lake is transformed — based on previously set
policies and rules — into usable data that can be queried for analysis.
Best-in-class data lake technologies help you create rules to
standardize and validate data based on your unique business rules and
analysis goals — along with any regulations you might have to observe.
For instance, an insurance company may need to mask sensitive data such
as social-security number, based on user needs and security roles. A
top-notch data lake product will also have pre-built transformation
algorithms for common data types. This will speed up the transformation
process and deliver data into users' hands more quickly.

The data discovery process is where the benefits of a data lake are most
apparent. In a data lake, there is an enormous pool of cleansed data,
just waiting to be accessed and analyzed. In choosing a data lake
technology, you'll want to look for a intuitive GUI that helps users
search for the data they want and helps them build queries that return
data in a graphics or text-based format that supports sophisticated
analysis.

The benefits of a data lake are clear:

1. They're quick to deploy. Because data lakes use schema on read
    (which means that data isn't processed until its queried) there
    isn't a months-long effort to write a rigid schema to organize the
    data. Instead, data is only organized when users need to access it.
2. They're flexible and scalable. Because they accept most data types
    and they're open source to facilitate more storage, data lakes can
    change as your organization changes, and they can grow as you grow.
3. They make managing data easy. With powerful cleansing and
    transformation capabilities facilitated through an easy-to-use
    interface — as well as pre-built transformation rules — data lakes
    make data management less complex and more streamlined.
4. They deliver powerful analysis capabilities. With user-friendly GUIs
    and self-service data query abilities, users can quickly search for
    and access the data they need, and ask business-driven, complex
    questions — driving more informed, quicker decision-making that
    leads to accelerated outcomes.

I've only begun to scratch the surface of data lake technology here. I'd
love to hear from you and get your opinions on data lakes vs. data warehouses.
You can contact me directly on [Linkedin](https://www.linkedin.com/in/anujain/)
or at <anu@nexuscognitive.com>.
