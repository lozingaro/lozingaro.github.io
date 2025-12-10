---
layout: page
title: Academic Dropout
permalink: /research/academic-risk/path-analysis
---

### Scientific Report on Student Course Sequence Analysis

#### Research Question

Main Question: Are there significant differences in the order in which subjects are taken by students who take more than 40 credits versus those who take 40 or fewer credits in the first year after enrolling in a Computer Science program?

Sub-Questions:

1. Does the year of enrollment influence the sequence in which subjects are taken?
2. Are there gender-specific differences in the sequence of subject completion?

#### Methodology

##### Data Collection

The analysis was based on a dataset containing information about students' enrollment dates, subjects taken, credits earned, exam dates, grades, and program IDs.

##### Data Preparation

1. **Filtering**: The dataset was filtered for students in the Computer Science program (Program ID 8009).
2. **Data Transformation**: Converted dates to datetime format, calculated total credits per student in the first year, and categorized students into two groups based on credits (>40 and <=40).
3. **Sorting**: Sorted the data by `StudentID` and `ExamDate` to determine the sequence of subjects taken.

##### Analysis Steps

1. **Identifying Common Subjects**: Determined the most common subjects taken by students in each credit category.
2. **Analyzing Subject Sequence**: Analyzed the sequence in which these common subjects were taken.
3. **Statistical Significance Testing**: Used Chi-Square tests to assess the statistical significance of the observed differences in sequence patterns.
4. **Segmented Analysis**: Repeated the sequence analysis and significance testing segmented by year of enrollment and gender.

#### Conclusions

1. **Credit-Based Differences**: Significant differences were found in the sequence of subject completion between students who took more than 40 credits and those who took 40 or fewer credits. This difference was statistically significant for most common subjects, suggesting a distinct pattern in course progression based on credit load.

2. **Influence of Enrollment Year**: The sequence in which subjects were taken varied significantly across different enrollment years. This indicates that the year of enrollment may influence students' course-taking patterns.

3. **Gender-Specific Patterns**: Gender-specific differences were observed in the sequence of subject completion. Male students showed significant differences in subject sequences for most common subjects, whereas female students showed significant differences for a subset of these subjects.

4. **Implications**: These findings suggest that course advising and program structuring in Computer Science might benefit from considering these patterns. Tailoring advice based on credit load, year of enrollment, and potentially gender may enhance students' academic progression.

5. **Recommendations for Further Research**: Future studies could explore the reasons behind these patterns, such as course availability, academic advising, or student preferences. Additionally, expanding the analysis to other programs and institutions could provide a broader understanding of student course-taking behaviors.
