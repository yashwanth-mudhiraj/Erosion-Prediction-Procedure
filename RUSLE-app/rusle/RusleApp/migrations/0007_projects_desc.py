# Generated by Django 3.2 on 2021-04-29 22:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RusleApp', '0006_auto_20210428_2329'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='Desc',
            field=models.CharField(default='Description of Project', max_length=100),
            preserve_default=False,
        ),
    ]
