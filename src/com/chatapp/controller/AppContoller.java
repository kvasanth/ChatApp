package com.chatapp.controller;


import java.sql.*;
import java.util.logging.Logger;

import java.io.IOException;
import java.io.PrintWriter;
 
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class AppContoller extends HttpServlet  
{
	
	public void doGet(HttpServletRequest request,
            HttpServletResponse response)
    throws ServletException, IOException {
		
		String JDBC_DRIVER="com.mysql.jdbc.Driver";  
		    String DB_URL="jdbc:mysql://localhost/ChatAPP";
		    Logger LOGGER = Logger.getLogger(MyClass.class.getName()); 

		   //  Database credentials
		    String USER = "root";
		    String PASS = "";

		   // Set response content type
		   response.setContentType("text/html");
		   JsonParser parser = new JsonParser();
		   JsonObject obj = (JsonObject) parser
	                .parse(request.getParameter("user"));
		   Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
		   Class.forName("com.mysql.jdbc.Driver");
		   Statement stmt = conn.prepareStatement("select * from UserDetails where email=?");
		   stmt.setString(1,request.get(obj.username));
		   ResultSet rs = stmt.executeQuery();
		   if(rs)
		   {
			   response.setStatus(200);
		   }
		   else
		   {
			   response.setStatus(404);
		   }
		   System.out.println("UserName"+obj.username);
	
}
}