import { AbstractControl, ValidationErrors } from "@angular/Forms";

export class laValidation
{
static cannotUseEspace( espace : AbstractControl ) : ValidationErrors | null
{
      if((espace.value as string).indexOf(" ")>=0)
      return {
        cannotUseEspace : true

      }
       else return null ;
    
    }
}