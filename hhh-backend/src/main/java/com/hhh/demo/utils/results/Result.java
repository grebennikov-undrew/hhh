package com.hhh.demo.utils.results;

import java.util.List;
import java.util.Map;

public class Result {
    private List<Row> rows;
    private Map<String, String> coltypes;

    public List<Row> getRows() {
        return rows;
    }

    public void setRows(List<Row> rows) {
        this.rows = rows;
    }

    public Map<String, String> getColtypes() {
        return coltypes;
    }

    public void setColtypes(Map<String, String> coltypes) {
        this.coltypes = coltypes;
    }
}

