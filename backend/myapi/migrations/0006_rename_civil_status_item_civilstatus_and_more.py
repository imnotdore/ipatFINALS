# Generated by Django 5.0.6 on 2024-07-20 06:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0005_remove_item_college_remove_item_elementary_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='Civil_Status',
            new_name='CivilStatus',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='Date_of_Birth',
            new_name='DateofBirth',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='Place_of_Birth',
            new_name='PlaceofBirth',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='firstname',
            new_name='fname',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='lastname',
            new_name='lname',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='middlename',
            new_name='mname',
        ),
    ]
