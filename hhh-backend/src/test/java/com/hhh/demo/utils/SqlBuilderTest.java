package com.hhh.demo.utils;

import org.junit.jupiter.api.Test;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SqlBuilderTest {
    @Test
    public void testBuildQuery() {
        // Arrange
        Column col1 = new Column("col1");
        Column col2 = new Column("col2", "label");
        List<Column> columns = Arrays.asList(col1, col2);
        String tableName = "example_table";
        String conditions = "col1 > 10";
        List<Column> groupByColumns = Arrays.asList(col1);
        List<Column> orderByColumns = Arrays.asList(col1,col2);
        int limitCount = 5;

        SqlBuilder builder = new SqlBuilder()
                .select(columns)
                .from(tableName)
                .where(conditions)
                .groupBy(groupByColumns)
                .orderBy(orderByColumns, true)
                .limit(limitCount);

        // Act
        String query = builder.build();

        // Assert
        String expectedQuery = """
                SELECT col1 as "col1", col2 as "label"
                FROM example_table
                WHERE col1 > 10
                GROUP BY col1
                ORDER BY col1, col2 DESC
                LIMIT 5
                """;

        assertEquals(expectedQuery, query);
    }

}