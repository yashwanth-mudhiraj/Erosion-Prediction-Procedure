from django.db import models
from django_base64field.fields import Base64Field

# Create your models here.

class LSFactor(models.Model):
    Id = models.AutoField(primary_key=True)
    Location = models.CharField(max_length=100)
    LSvalue = models.FloatField(max_length=100)
    recordstatus = models.CharField(max_length=100, default='')

class LSFactor_New(models.Model):
    Id = models.AutoField(primary_key=True)
    Sheet_flow_len = models.IntegerField()
    Avg_water_slope = models.FloatField(max_length=10)
    LSvalue = models.FloatField(max_length=10)

class CFactor(models.Model):
    Id = models.AutoField(primary_key=True)
    Cover = models.CharField(max_length=100)
    Cfactor = models.FloatField(max_length=100)
    CRef = models.CharField(max_length=100)
    recordstatus = models.CharField(max_length=100, default='')

class PFactor(models.Model):
    Id = models.AutoField(primary_key=True)
    Support_Practices = models.CharField(max_length=100)
    Pfactor = models.FloatField(max_length=100)
    PRef = models.CharField(max_length=100)
    recordstatus = models.CharField(max_length=100, default='')
    
class Projects(models.Model):
    Id = models.AutoField(primary_key=True)
    ProjectName = models.CharField(max_length=100)
    ProjectDesc = models.CharField(max_length=100)
    PreSoilLoss = models.FloatField(max_length=100)
    PostSoilLoss = models.FloatField(max_length=100)


class Subsites(models.Model):
    Id = models.AutoField(primary_key=True)
    ProjectId = models.ForeignKey(Projects, on_delete=models.CASCADE, related_name="subsites")
    Name = models.CharField(max_length=100)
    Desc = models.CharField(max_length=100)
    LS_pre = models.FloatField(max_length=100)
    C_pre = models.FloatField(max_length=100)
    P_pre = models.FloatField(max_length=100)
    R_pre = models.FloatField(max_length=100)
    K_pre = models.FloatField(max_length=100)
    LS_post = models.FloatField(max_length=100)
    C_post = models.FloatField(max_length=100)
    P_post = models.FloatField(max_length=100)
    R_post = models.FloatField(max_length=100)
    K_post = models.FloatField(max_length=100)
    PreSoilLoss = models.FloatField(max_length=100)
    PostSoilLoss = models.FloatField(max_length=100)
    From_date = models.DateTimeField()
    To_date = models.DateTimeField()
    recordstatus = models.CharField(max_length=100, default='')
    ProjectImage = Base64Field(max_length=1000000, blank=True, null=True)

