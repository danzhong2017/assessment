package io.swagger.api;


import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import javax.validation.constraints.*;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-04-27T14:35:32.826-04:00")

@Api(value = "assessment", description = "the assessment API")
public interface AssessmentApi {

    @ApiOperation(value = "Create a New Assessment", notes = "You may create your own assessment using this action. It takes a JSON object containing an assessment.", response = Void.class, tags={ "AssessmentController", })
    @ApiResponses(value = { 
        @ApiResponse(code = 201, message = "Created", response = Void.class) })
    @RequestMapping(value = "/assessment",
        produces = { "application/json" }, 
        method = RequestMethod.POST)
    ResponseEntity<Void> assessmentPost();

}
