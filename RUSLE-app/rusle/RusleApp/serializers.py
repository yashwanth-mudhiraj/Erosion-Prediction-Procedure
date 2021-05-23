from rest_framework import serializers
from RusleApp.models import LSFactor, CFactor, PFactor, LSFactor_New, Subsites, Projects

class LSFactorSerializer(serializers.ModelSerializer):
    class Meta:
        model = LSFactor
        fields = ('Id',
                  'Location',
                  'LSvalue',
                  'recordstatus')

class LSFactor_NewSerializer(serializers.ModelSerializer):
    class Meta:
        model = LSFactor_New
        fields = ('Id',
                  'Sheet_flow_len',
                  'Avg_water_slope',
                  'LSvalue')

class CFactorSerializer(serializers.ModelSerializer):
    class Meta:
        model = CFactor
        fields = ('Id',
                  'Cover',
                  'Cfactor',
                  'CRef',
                  'recordstatus')

class PFactorSerializer(serializers.ModelSerializer):
    class Meta:
        model = PFactor
        fields = ('Id',
                  'Support_Practices',
                  'Pfactor',
                  'PRef',
                  'recordstatus')

class SubsitesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subsites
        fields = ('Id',
                  'ProjectId',
                  'Name',
                  'Desc',
                  'LS_pre',
                  'C_pre',
                  'P_pre',
                  'R_pre',
                  'K_pre',
                  'LS_post',
                  'C_post',
                  'P_post',
                  'R_post',
                  'K_post',
                  'PreSoilLoss',
                  'PostSoilLoss',
                  'From_date',
                  'To_date',
                  'recordstatus',
                  'ProjectImage')


class ProjectsSerializer(serializers.ModelSerializer):
    subsites = SubsitesSerializer(many=True, read_only=True)
    class Meta:
        model = Projects
        fields = ('Id',
                  'ProjectName',
                  'ProjectDesc',
                  'PreSoilLoss',
                  'PostSoilLoss',
                  'subsites')



    

